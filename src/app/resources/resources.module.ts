import { ResourceTypePipe, ResourceLevelPipe } from './pipes';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { ResourcesRoutingModule } from './resources-routing.module';
import {
  ResourcesComponent,
  VoteComponent,
  AddResourceComponent,
  FilterComponent,
  ResourcesContainerComponent
} from './components';

@NgModule({
  imports: [SharedModule, ResourcesRoutingModule],
  declarations: [
    ResourcesComponent,
    VoteComponent,
    AddResourceComponent,
    FilterComponent,
    ResourcesContainerComponent,
    ResourceLevelPipe,
    ResourceTypePipe
  ],
  entryComponents: [AddResourceComponent]
})
export class ResourcesModule {}
