import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RootComponent } from './components';
import { AuthGuard } from '@app/core';

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
export class LayoutRoutingModule {}
