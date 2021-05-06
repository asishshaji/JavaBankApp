import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import { Component, OnInit, TemplateRef } from '@angular/core'

import { Router } from '@angular/router'
import { UserServiceService } from 'src/app/shared/services/user-service.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  customer: any = {}

  constructor(
    private _customerService: UserServiceService,
    private _router: Router,
  ) { }

  ngOnInit(): void { }

  register() {
    console.log(this.customer)

    this._customerService.registerCustomer(this.customer).subscribe(
      (data) => {
        console.log('data', data);
        this._router.navigate(["customer", "login"]);
      },
      (error) => {
        console.log('Error', error)
        alert(error.error.message)
      },
    )
  }
}
