import { ResourcesState } from '../states';
import {
  createSelector,
  MemoizedSelector,
  createFeatureSelector
} from '@ngrx/store';
import { Filter } from '@app/resources/models';

export const selectResourceState: MemoizedSelector<
  object,
  ResourcesState
> = createFeatureSelector<ResourcesState>('resources');

export const selectFilter: (state: object) => Filter = createSelector(
  selectResourceState,
  (state: ResourcesState) => state.filter
);
