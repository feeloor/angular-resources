import { ActionReducerMap } from '@ngrx/store';
import { ResourcesState } from '../states';
import * as fromFilter from './filter.reducer';
import * as fromResource from './resource.reducer';

export const reducers: ActionReducerMap<ResourcesState> = {
  filter: fromFilter.reducer,
  resources: fromResource.reducer
};
