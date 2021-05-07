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
  ngOnInit(): void {}

  login() {
    this._customerService.loginCustomer(this.customer).subscribe(
      (res: any) => {
        const token = res['token']
        localStorage['token'] = token
      },
      (err) => {
        console.log(err)
      },
      () => {
        console.log(localStorage['token'])
        if (localStorage['token'] != 'undefined') {
          this._router.navigate(['customer', 'dashboard'])
        }
      },
    )
  }
}
