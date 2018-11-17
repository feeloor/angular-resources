import * as fromFilter from './filter.reducer';
import * as fromResource from './resource.reducer';
import { ResourcesState } from '../states';
import { ActionReducerMap } from '@ngrx/store';

export const reducers: ActionReducerMap<ResourcesState> = {
  filter: fromFilter.reducer,
  resources: fromResource.reducer
};
