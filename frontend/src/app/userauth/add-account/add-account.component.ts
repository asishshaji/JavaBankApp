import { Component, OnInit } from '@angular/core'

import { Account } from '../../shared/interfaces/IAccount'
import { Location } from '@angular/common'
import { Router } from '@angular/router'
import { UserServiceService } from 'src/app/shared/services/user-service.service'

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css'],
})
export class AddAccountComponent implements OnInit {
  constructor(
    private _router: Router,
    private _location: Location,
    private _customerService: UserServiceService,
  ) {}

  // account: Account = {} as Account
  _ownerName: any
  _state: any
  _city: any
  _pin: any
  _balance: any
  type: any

  ngOnInit(): void {}

  goBack() {
    this._location.back()
  }

  createAccount() {
    const account = {
      _ownerName: this._ownerName,
      _state: this._state,
      _city: this._city,
      _pin: this._pin,
      _balance: new Number(0),
      type: this.type,
    } as Account
    console.log(account)

    this._customerService.createAccount(account)

    this._router.navigate(['customer', 'dashboard'])
  }
}
