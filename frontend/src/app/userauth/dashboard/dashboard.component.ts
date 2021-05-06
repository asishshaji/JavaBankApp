import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import { Component, OnInit, TemplateRef } from '@angular/core'

import { Account } from 'src/app/shared/interfaces/IAccount'
import { Customer } from 'src/app/shared/interfaces/ICustomer'
import { Router } from '@angular/router'
import { UserServiceService } from 'src/app/shared/services/user-service.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  customer: any
  account: any

  modalRef: BsModalRef = {} as BsModalRef

  amount: any
  constructor(
    private _customerService: UserServiceService,
    private _router: Router,
    private modalService: BsModalService,
  ) {
    this.getProfileData()
  }

  ngOnInit(): void {
    this.getProfileData()
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template)
  }

  getProfileData() {
    this._customerService.getUserProfile().subscribe((res) => {
      this.customer = res

      this._customerService.getAccountOfUser().subscribe((res) => {
        this.account = res
      })
    })
  }

  logout() {
    this._customerService.deleteToken()
    this._router.navigate(['customer', 'login'])
  }

  addAccount() {
    this._router.navigate(['customer', 'create'])
    this.getProfileData()
  }

  withdraw() {
    this._customerService.withdraw(this.amount)
    this.getProfileData()
    this.modalRef.hide()
  }

  deposit() {
    this._customerService.deposit(this.amount)
    this.getProfileData()
    this.modalRef.hide()
  }
}
