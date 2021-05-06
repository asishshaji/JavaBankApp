import { AddAccountComponent } from './add-account/add-account.component'
import { AlertModule } from 'ngx-bootstrap/alert'
import { ButtonsModule } from 'ngx-bootstrap/buttons'
import { CommonModule } from '@angular/common'
import { DashboardComponent } from './dashboard/dashboard.component'
import { EditAccountComponent } from './edit-account/edit-account.component'
import { FormsModule } from '@angular/forms'
import { LoginComponent } from './login/login.component'
import { ModalModule } from 'ngx-bootstrap/modal'
import { NgModule } from '@angular/core'
import { RegisterComponent } from './register/register.component'
import { UserAuthRoutingModule } from './userauth-routing.module'

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    AddAccountComponent,
    EditAccountComponent,
  ],
  imports: [
    CommonModule,
    UserAuthRoutingModule,
    ButtonsModule,
    FormsModule,
    ModalModule.forRoot(),
    AlertModule,
  ],
})
export class UserauthModule {}
