import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import loginModel from '../models/loginModel';
import { environment } from '../../../environments/environment';
import signUpModel from '../models/signUpModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  login(formData : loginModel)
  {
    return this.http.post(`${environment.apiUrl}/api/auth/login`, formData);
  }

  signUp(formData : signUpModel)
  {
    return this.http.post(`${environment.apiUrl}/api/auth/register`, formData);
  }

  getDepartments()
  {
    return this.http.get(`${environment.apiUrl}/api/department/getdepartments`);
  }
}
