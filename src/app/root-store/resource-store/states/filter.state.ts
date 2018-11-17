import { Filter, ResourceType, ResourceLevel } from '@app/resources/models';

export const initialState: Filter = {
  resourceType: ResourceType.All,
  resourceLevel: ResourceLevel.All
};
