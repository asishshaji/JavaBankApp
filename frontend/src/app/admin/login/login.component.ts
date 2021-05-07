import { Component, OnInit } from '@angular/core'

import { AdminServiceService } from 'src/app/shared/services/admin-service.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private _router: Router,
    private _adminService: AdminServiceService,
  ) {}

  admin: any = {}

  ngOnInit(): void {}

  login() {
    this._adminService.loginAdmin(this.admin).subscribe(
      (res: any) => {
        const token = res['token']
        localStorage['adminToken'] = token
      },
      (err) => {
        console.log(err)
      },
      () => {
        console.log(localStorage['adminToken'])
        if (localStorage['adminToken'] != 'undefined') {
          this._router.navigate(['admin', 'dashboard'])
        }
      },
    )
  }
}
