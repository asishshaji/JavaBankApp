import { ActivatedRoute, Router } from '@angular/router'
import { Component, OnInit } from '@angular/core'

import { AdminServiceService } from 'src/app/shared/services/admin-service.service'
import { Location } from '@angular/common'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  constructor(
    private _adminService: AdminServiceService,
    private _router: Router,
    private _location: Location,
    private _activatedRoute: ActivatedRoute,
  ) {}

  account: any = {} as Account
  id: Number = -1

  goBack() {
    this._location.back()
  }
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((res) => {
      this.id = Number(res.get('id'))
    })

    this._adminService.fetchAccount(this.id).subscribe((res) => {
      this.account = res
    })
  }

  editAccount() {
    console.log(this.account)
    this._adminService.editAccount(this.account).subscribe((res) => {})
    this._router.navigate(['admin', 'dashboard'])
  }
}
