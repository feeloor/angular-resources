import { Resource, Vote } from '@app/resources/models';
import { Action } from '@ngrx/store';

export enum ActionTypes {
  LOAD_RESOURCES = '[Resources] Load',
  LOAD_SUCCESS = '[Resources] Load Success',
  LOAD_FAILURE = '[Resources] Load Failure',
  ADD_RESOURCE = '[Resources] Add',
  ADD_SUCCESS = '[Resources] Add Success',
  ADD_FAILURE = '[Resources] Add Failure',
  VOTE_RESOURCE = '[Resources] Vote Resource',
  VOTE_SUCCESS = '[Resources] Vote Success',
  VOTE_FAILURE = '[Resources] Vote Failed'
}

export class LoadResourcesAction implements Action {
  readonly type = ActionTypes.LOAD_RESOURCES;
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload: { resources: Resource[] }) { }
}

export class LoadFailureAction implements Action {
  readonly type = ActionTypes.LOAD_FAILURE;
  constructor(public payload: { error: string }) { }
}

export class AddResourceAction implements Action {
  readonly type = ActionTypes.ADD_RESOURCE;
  constructor(public payload: { resource: Partial<Resource> }) { }
}

export class AddSuccessAction implements Action {
  readonly type = ActionTypes.ADD_SUCCESS;
}

export class AddFailureAction implements Action {
  readonly type = ActionTypes.ADD_FAILURE;
  constructor(public payload: { error: string }) { }
}

export class VoteResourceAction implements Action {
  readonly type = ActionTypes.VOTE_RESOURCE;
  constructor(public payload: { resourceId: string; allVotes: Vote[] }) { }
}

export class VoteSuccessAction implements Action {
  readonly type = ActionTypes.VOTE_SUCCESS;
}
export class VoteFailureAction implements Action {
  readonly type = ActionTypes.VOTE_FAILURE;
  constructor(public payload: { error: string }) { }
}

export type Actions =
  | LoadResourcesAction
  | LoadSuccessAction
  | LoadFailureAction
  | AddResourceAction
  | AddSuccessAction
  | AddFailureAction
  | VoteResourceAction
  | VoteSuccessAction
  | VoteFailureAction;
