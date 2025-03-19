import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import loginModel from '../models/loginModel';
import { environment } from '../../../environments/environment';
import signUpModel from '../models/signUpModel';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SharedService } from './shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient, private router : Router, private sharedService : SharedService) { }

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

  logout()
  {
    const headers = this.sharedService.getHeaders();
    this.http.post(`${environment.apiUrl}/api/auth/logout`, {}, {headers}).subscribe({
      next: () => {
        localStorage.removeItem('token');
        this.router.navigate([''])
      },
      error: (err) => console.error("Logout failed", err)
    })
  }
}
