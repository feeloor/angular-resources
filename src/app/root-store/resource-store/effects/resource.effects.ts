import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of, from } from 'rxjs';
import { Action, Store, select } from '@ngrx/store';
import * as ResourceActions from '../actions';
import {
  map,
  switchMap,
  catchError,
  withLatestFrom,
  mergeMap
} from 'rxjs/operators';
import { Resource, ResourceType, ResourceLevel } from '@app/resources/models';
import { FilterSelectors } from '../selectors';
import * as RootStoreState from '../../root-state';
import { NotificationService, LoggingService } from '@app/core';

@Injectable()
export class ResourceEffects {
  constructor(
    private db: AngularFirestore,
    private actions$: Actions,
    private store$: Store<RootStoreState.State>,
    private notificationService: NotificationService,
    private loggingService: LoggingService
  ) {}

  /**
   * Vote resource
   */
  @Effect()
  voteResourceEffect$: Observable<Action> = this.actions$.pipe(
    ofType<ResourceActions.ResourceCollectionActions.VoteResourceAction>(
      ResourceActions.ResourceCollectionActions.ActionTypes.VOTE_RESOURCE
    ),
    switchMap(action =>
      from(
        this.db.doc(`resources/${action.payload.resourceId}`).update({
          votes: [...action.payload.allVotes.map(v => Object.assign({}, v))]
        })
      ).pipe(
        map(
          () =>
            new ResourceActions.ResourceCollectionActions.VoteSuccessAction()
        ),
        catchError(error =>
          of(
            new ResourceActions.ResourceCollectionActions.VoteFailureAction({
              error
            })
          )
        )
      )
    )
  );

  /**
   * Adds notification and logging if vote succeeded
   */
  @Effect()
  voteSuccessEffect$: Observable<Action> = this.actions$.pipe(
    ofType<ResourceActions.ResourceCollectionActions.VoteSuccessAction>(
      ResourceActions.ResourceCollectionActions.ActionTypes.VOTE_SUCCESS
    ),
    switchMap(action => {
      this.notificationService.notify('Thanks for your vote!', 'success');
      this.loggingService.success(`Successfully voted!`);

      return of(
        new ResourceActions.ResourceCollectionActions.LoadResourcesAction()
      );
    })
  );

  /**
   * Adds notification and logging if vote failed
   */
  @Effect()
  voteFailureEffect$: Observable<Action> = this.actions$.pipe(
    ofType<ResourceActions.ResourceCollectionActions.VoteFailureAction>(
      ResourceActions.ResourceCollectionActions.ActionTypes.VOTE_FAILURE
    ),
    switchMap(action => {
      this.notificationService.notify(
        'Failed while voting on resource, try again...',
        'error'
      );
      this.loggingService.error(
        'Failed while voting on resource: ' + action.payload.error.toString()
      );

      return of(action);
    })
  );

  /**
   * Adds resource and triggers load
   */
  @Effect()
  addResourceEffect$: Observable<Action> = this.actions$.pipe(
    ofType<ResourceActions.ResourceCollectionActions.AddResourceAction>(
      ResourceActions.ResourceCollectionActions.ActionTypes.ADD_RESOURCE
    ),
    map(action => action.payload),
    mergeMap(value =>
      from(this.db.collection('resources').add(value.resource)).pipe(
        map(
          () => new ResourceActions.ResourceCollectionActions.AddSuccessAction()
        ),
        catchError(error =>
          of(
            new ResourceActions.ResourceCollectionActions.AddFailureAction({
              error
            })
          )
        )
      )
    )
  );

  /**
   * Add notifications and logging and then dispatch load request
   */
  @Effect()
  addSuccessResourceEffect$: Observable<Action> = this.actions$.pipe(
    ofType<ResourceActions.ResourceCollectionActions.AddSuccessAction>(
      ResourceActions.ResourceCollectionActions.ActionTypes.ADD_SUCCESS
    ),
    switchMap(action => {
      this.notificationService.notify(
        'Resource was successfully added',
        'success'
      );
      this.loggingService.success('Resource was successfully added.');
      return of(
        new ResourceActions.ResourceCollectionActions.LoadResourcesAction()
      );
    })
  );

  /**
   * Error Notification and logging
   */
  @Effect()
  addFailureResourceEffect$: Observable<Action> = this.actions$.pipe(
    ofType<ResourceActions.ResourceCollectionActions.AddFailureAction>(
      ResourceActions.ResourceCollectionActions.ActionTypes.ADD_FAILURE
    ),
    switchMap(action => {
      this.notificationService.notify(
        'Failed while adding resource, try again...',
        'error'
      );
      this.loggingService.error(
        'Failed while adding resource: ' + action.payload.error.toString()
      );

      return of(action);
    })
  );

  /**
   * Loads resources from Firestore with Filter
   */
  @Effect()
  loadResourceEffect$: Observable<Action> = this.actions$.pipe(
    ofType<ResourceActions.ResourceCollectionActions.LoadResourcesAction>(
      ResourceActions.ResourceCollectionActions.ActionTypes.LOAD_RESOURCES
    ),
    withLatestFrom(this.store$.pipe(select(FilterSelectors.selectFilter))),
    switchMap(([action, filter]) =>
      this.db
        .collection('resources', ref => {
          let query:
            | firebase.firestore.CollectionReference
            | firebase.firestore.Query = ref;
          query = query.where('enabled', '==', true);

          if (!filter) {
            return query;
          }

          if (filter.resourceType && filter.resourceType !== ResourceType.All) {
            query = query.where('type', '==', filter.resourceType);
          }

          if (
            filter.resourceLevel &&
            filter.resourceLevel !== ResourceLevel.All
          ) {
            query = query.where('level', '==', filter.resourceLevel);
          }

          return query;
        })
        .snapshotChanges()
        .pipe(
          map(actions =>
            actions.map(a => {
              const data = a.payload.doc.data();
              return new Resource({ id: a.payload.doc.id, ...data });
            })
          ),
          map(
            resources =>
              new ResourceActions.ResourceCollectionActions.LoadSuccessAction({
                resources: [
                  ...resources.sort(
                    (a, b) => b.calculatedVotes - a.calculatedVotes
                  )
                ]
              })
          ),
          catchError(error =>
            of(
              new ResourceActions.ResourceCollectionActions.LoadFailureAction({
                error
              })
            )
          )
        )
    )
  );

  /**
   * Filter effects
   */
  @Effect()
  filterTriggerLoad$: Observable<Action> = this.actions$.pipe(
    ofType(
      ResourceActions.FilterActions.ActionTypes.UPDATE_FILTER,
      ResourceActions.FilterActions.ActionTypes.UPDATE_FILTER_LEVEL,
      ResourceActions.FilterActions.ActionTypes.UPDATE_FILTER_TYPE
    ),
    switchMap(action =>
      of(new ResourceActions.ResourceCollectionActions.LoadResourcesAction())
    )
  );
}
