import { Resource } from '@app/resources/models';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

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
