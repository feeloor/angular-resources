import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { ResourceLevelPipe, ResourceTypePipe } from './pipes';

import {
  AddResourceComponent,
  FilterComponent,
  ResourcesComponent,
  ResourcesContainerComponent,
  VoteComponent
} from './components';
import { ResourcesRoutingModule } from './resources-routing.module';

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
export class ResourcesModule { }
