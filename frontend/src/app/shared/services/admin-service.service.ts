import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Account } from '../interfaces/IAccount'
import { Admin } from '../interfaces/IAdmin'
import { Injectable } from '@angular/core'
import { adminUrl } from '../constants/constants'

@Injectable({
  providedIn: 'root',
})
export class AdminServiceService {
  headerOptions = {}

  constructor(private http: HttpClient) {}

  private setHeaderOptions() {
    this.headerOptions = {
      headers: new HttpHeaders().set(
        'Authorization',
        sessionStorage.getItem('adminToken') + '',
      ),
    }
  }

  loginAdmin(admin: Admin) {
    this.http.post(`${adminUrl}/login`, admin).subscribe((res) => {
      if (!!Object(res)['token'])
        sessionStorage.setItem('adminToken', Object(res)['token'])
    })
  }

  fetchAllAccounts() {
    this.setHeaderOptions()
    return this.http.get(`${adminUrl}/accounts`, this.headerOptions)
  }
  deleteToken() {
    sessionStorage.removeItem('adminToken')
  }

  checkIfAuthenticated() {
    const token = sessionStorage.getItem('adminToken')
    console.log(!!token)
    return !!token
  }

  fetchAccount(id: Number) {
    this.setHeaderOptions()
    return this.http.get<Account>(
      `${adminUrl}/account/${id}`,
      this.headerOptions,
    )
  }

  editAccount(account: Account) {
    this.setHeaderOptions()
    return this.http.post(
      `${adminUrl}/account/edit`,
      account,
      this.headerOptions,
    )
  }
}