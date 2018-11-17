import * as fromFilter from './filter.state';
import * as fromResources from './resource.state';
import { Filter } from '@app/resources/models';

export interface ResourcesState {
  filter: Filter;
  resources: fromResources.State;
}
