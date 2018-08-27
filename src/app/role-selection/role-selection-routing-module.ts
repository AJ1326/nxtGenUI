import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { RoleSelectionComponent } from './role-selection.component';

const routes: Routes = [
  { path: '', component: RoleSelectionComponent, data: { title: extract('Roles') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoleSelectionRoutingModule { }
