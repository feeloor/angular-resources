import { Filter, ResourceLevel, ResourceType } from '@app/resources/models';
import { Action } from '@ngrx/store';

export enum ActionTypes {
  LOAD_FILTER = '[Resources] Filter - Load',
  UPDATE_FILTER = '[Resources] Filter - Update',
  UPDATE_FILTER_TYPE = '[Resources] Filter - Update Type',
  UPDATE_FILTER_LEVEL = '[Resources] Filter - Update Level'
}

export class LoadFilterAction implements Action {
  readonly type = ActionTypes.LOAD_FILTER;
}

export class UpdateFilterAction implements Action {
  readonly type = ActionTypes.UPDATE_FILTER;
  constructor(public payload: Filter) { }
}

export class UpdateFilterTypeAction implements Action {
  readonly type = ActionTypes.UPDATE_FILTER_TYPE;
  constructor(public payload: ResourceType) { }
}
export class UpdateFilterLevelAction implements Action {
  readonly type = ActionTypes.UPDATE_FILTER_LEVEL;
  constructor(public payload: ResourceLevel) { }
}

export type Actions =
  | LoadFilterAction
  | UpdateFilterAction
  | UpdateFilterLevelAction
  | UpdateFilterTypeAction;
