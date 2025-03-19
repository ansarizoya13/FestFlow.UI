import { Injectable } from '@angular/core';
import { ROLE } from '../../constants/claims';
import Role from '../../enums/roles';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  getDataFromClaims(param:string) : string
  {
    const token = localStorage.getItem('token');
    let result = "";

    if(token != null)
    {
      let tokenFirstPartText = atob(token.split('.')[1]);
      let jsonObject = JSON.parse(tokenFirstPartText);
      result = jsonObject[param];
    }

    return result;
  }

  isLoggedInUserAdmin() : boolean
  {
    const userRole = this.getDataFromClaims(ROLE);
    return userRole === Role.Admin.toString();
  }

  isLoggedInUserNonAdmin() : boolean
  {
    const userRole = this.getDataFromClaims(ROLE);
    return userRole === Role.User.toString();
  }

  getAuthToken() : string | null
  {
    return localStorage.getItem('token');
  }

  getHeaders() : HttpHeaders
  {
    const token = this.getAuthToken();

    return new HttpHeaders({
      'Authorization' : token ? `Bearer ${token}` : ''
    })
  }

}
