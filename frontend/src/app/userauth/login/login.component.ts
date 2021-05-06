import { Component, OnInit } from '@angular/core'

import { Router } from '@angular/router'
import { UserServiceService } from 'src/app/shared/services/user-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  customer: any = {}

  constructor(
    private _customerService: UserServiceService,
    private _router: Router,
  ) {}
  ngOnInit(): void {
    if (this._customerService.checkIfAuthenticated())
      this._router.navigate(['customer', 'dashboard'])
  }

  login() {
    this._customerService.loginCustomer(this.customer)

    if (this._customerService.checkIfAuthenticated())
      this._router.navigate(['customer', 'dashboard'])
  }
}
