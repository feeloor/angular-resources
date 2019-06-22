import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ActionTypes, RemoveNotification } from './actions';

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

  constructor(private actions$: Actions) { }
}
