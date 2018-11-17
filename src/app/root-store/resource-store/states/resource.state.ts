import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { Resource } from '@app/resources/models';

export const featureAdapter: EntityAdapter<Resource> = createEntityAdapter<
  Resource
>({
  selectId: (resource: Resource) => resource.id,
  sortComparer: false
});

export interface State extends EntityState<Resource> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = featureAdapter.getInitialState({
  isLoading: false,
  error: null
});
