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

  ngOnInit(): void {
    if (this._adminService.checkIfAuthenticated())
      this._router.navigate(['admin', 'dashboard'])
  }

  login() {
    this._adminService.loginAdmin(this.admin)
    if (this._adminService.checkIfAuthenticated())
      this._router.navigate(['admin', 'dashboard'])
  }
}
