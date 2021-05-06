import { AdminRoutingModule } from './admin-routing.module'
import { CommonModule } from '@angular/common'
import { DashboardComponent } from './dashboard/dashboard.component'
import { EditComponent } from './edit/edit.component'
import { FormsModule } from '@angular/forms'
import { LoginComponent } from './login/login.component'
import { ModalModule } from 'ngx-bootstrap/modal'
import { Ng2SearchPipeModule } from 'ng2-search-filter'
import { NgModule } from '@angular/core'
import { NgxPaginationModule } from 'ngx-pagination'
import { OrderModule } from 'ngx-order-pipe'

@NgModule({
  declarations: [LoginComponent, DashboardComponent, EditComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    OrderModule,
    ModalModule.forRoot(),
    Ng2SearchPipeModule,
    NgxPaginationModule,
  ],
})
export class AdminModule {}
