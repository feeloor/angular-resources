import { Filter, ResourceLevel, ResourceType } from '@app/resources/models';

export const initialState: Filter = {
  resourceType: ResourceType.All,
  resourceLevel: ResourceLevel.All
};
