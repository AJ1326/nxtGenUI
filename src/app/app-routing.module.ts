import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Route } from '@app/core';

const routes: Routes = [
  Route.withLoggedInShell([
    { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
  ]),
  Route.withLogoOnlyShell([
    { path: 'role-selection', loadChildren: 'app/role-selection/role-selection.module#RoleSelectionModule' },
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
