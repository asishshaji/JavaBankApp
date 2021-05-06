import { Component, OnInit } from '@angular/core'

import { Account } from '../../shared/interfaces/IAccount'
import { AdminServiceService } from 'src/app/shared/services/admin-service.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private _router: Router,
    private _adminService: AdminServiceService,
  ) {}

  order: string = '_id'
  orderBool: boolean = false
  accounts: any = [] as Account[]
  p: number = 1
  term = ''

  fetchAllAccounts() {
    this._adminService.fetchAllAccounts().subscribe((res) => {
      this.accounts = res
      console.log(this.accounts)
    })
  }

  ngOnInit(): void {
    this.fetchAllAccounts()
  }

  changeOrder(val: string) {
    this.order = val
    this.orderBool = !this.orderBool
  }

  logout() {
    this._adminService.deleteToken()
    this._router.navigate(['admin', 'login'])
  }
}
