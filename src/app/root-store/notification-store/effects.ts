import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ActionTypes, RemoveNotification } from './actions';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class NotificationEffects {
  @Effect()
  notificationTimeout$: Observable<Action> = this.actions$.pipe(
    ofType(ActionTypes.ADD_NOTIFICATION),
    switchMap((action: any) =>
      timer(action.payload.timeout).pipe(
        map(() => new RemoveNotification(action.payload.id))
      )
    )
  );

  constructor(private actions$: Actions) {}
}
