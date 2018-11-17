import { ResourcesState } from '../states';
import {
  createFeatureSelector,
  MemoizedSelector,
  createSelector
} from '@ngrx/store';
import { featureAdapter } from '../states/resource.state';

export const getError = (state: ResourcesState) => state.resources.error;
export const getIsLoading = (state: ResourcesState) =>
  state.resources.isLoading;

export const selectResourceState: MemoizedSelector<
  object,
  ResourcesState
> = createFeatureSelector<ResourcesState>('resources');

export const getAllResources = createSelector(
  selectResourceState,
  state => state.resources
);

export const getAllEntities = createSelector(
  selectResourceState,
  state => state.resources.entities
);

export const selectAllResources = featureAdapter.getSelectors(getAllResources)
  .selectAll;

export const selectResourceError: MemoizedSelector<
  object,
  any
> = createSelector(selectResourceState, getError);

export const selectResourceIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(selectResourceState, getIsLoading);
