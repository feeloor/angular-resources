import { Filter } from '@app/resources/models';
import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';
import { ResourcesState } from '../states';

export const selectResourceState: MemoizedSelector<
  object,
  ResourcesState
> = createFeatureSelector<ResourcesState>('resources');

export const selectFilter: (state: object) => Filter = createSelector(
  selectResourceState,
  (state: ResourcesState) => state.filter
);
