import { Filter } from '@app/resources/models';
import * as fromFilter from './filter.state';
import * as fromResources from './resource.state';

export interface ResourcesState {
  filter: Filter;
  resources: fromResources.State;
}
