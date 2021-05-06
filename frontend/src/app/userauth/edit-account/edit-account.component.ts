import { ActivatedRoute, Router } from '@angular/router'
import { Component, OnInit } from '@angular/core'

import { Location } from '@angular/common'
import { UserServiceService } from 'src/app/shared/services/user-service.service'

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css'],
})
export class EditAccountComponent implements OnInit {
  constructor(
    private _customerService: UserServiceService,
    private _router: Router,
    private _location: Location,
  ) {}

  account: any

  goBack() {
    this._location.back()
  }
  ngOnInit(): void {
    this._customerService.getAccountOfUser().subscribe((res) => {
      this.account = res
    })
  }

  editAccount() {
    console.log(this.account)
    this._customerService.createAccount(this.account)
    this._router.navigate(['customer', 'dashboard'])
  }
}
