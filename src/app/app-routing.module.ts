import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionComponent } from './Component/action/action.component';
import { AuthGuardGuard } from './Component/auth-guard/auth-guard.guard';
import { AuthComponent } from './Component/auth/auth.component';
import { CasesComponent } from './Component/cases/cases.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { ProfileComponent } from './Component/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: CasesComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    component: AuthComponent,
    path: 'login',
  },
  {
    component: CasesComponent,
    path: 'cases',
    canActivate: [AuthGuardGuard],
  },
  {
    component: ActionComponent,
    path: 'action',
    canActivate: [AuthGuardGuard],
  },
  {
    component: ProfileComponent,
    path: 'profile',
    canActivate: [AuthGuardGuard],
    data: { key: 'sas' },
  },
  {
    component: DashboardComponent,
    path: 'dashboard',
    canActivate: [AuthGuardGuard],
  },
  {
    path: '**',
    component: CasesComponent,
    canActivate: [AuthGuardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
