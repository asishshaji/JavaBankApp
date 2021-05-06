import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { NgModule } from '@angular/core'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'customer',
    loadChildren: () =>
      import('./userauth/userauth.module').then((m) => m.UserauthModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
