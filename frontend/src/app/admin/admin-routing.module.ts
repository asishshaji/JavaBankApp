import { RouterModule, Routes } from '@angular/router'

import { AdminguardGuard } from '../shared/guard/adminguard.guard'
import { DashboardComponent } from './dashboard/dashboard.component'
import { EditComponent } from './edit/edit.component'
import { LoginComponent } from './login/login.component'
import { NgModule } from '@angular/core'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AdminguardGuard],
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    canActivate: [AdminguardGuard],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
