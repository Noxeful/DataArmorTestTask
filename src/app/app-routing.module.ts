import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./components/home/home.component";
import {SupportButtonComponent} from "./shared-modules/app-shared/components/support-button/support-button.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'saas_applications',
    loadChildren: () => import('./modules/saas-applications/saas-applications.module').then(m => m.SaasApplicationsModule)
  },
  { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
