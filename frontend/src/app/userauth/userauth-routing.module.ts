import { RouterModule, Routes } from '@angular/router'

import { AddAccountComponent } from './add-account/add-account.component'
import { AuthguardGuard } from '../shared/guard/authguard.guard'
import { DashboardComponent } from './dashboard/dashboard.component'
import { EditAccountComponent } from './edit-account/edit-account.component'
import { LoginComponent } from './login/login.component'
import { NgModule } from '@angular/core'
import { RegisterComponent } from './register/register.component'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: 'create',
    component: AddAccountComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: 'edit',
    component: EditAccountComponent,
    canActivate: [AuthguardGuard],
  },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAuthRoutingModule {}
