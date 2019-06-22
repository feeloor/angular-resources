import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [{
      path: 'resources',
      loadChildren: '@app/resources/resources.module#ResourcesModule'
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
