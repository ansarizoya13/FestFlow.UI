import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import userViewModel from '../../../common/models/userViewModel';
import { SharedService } from '../../../common/services/shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient, private sharedService : SharedService) { }

  getUsersList() : Observable<userViewModel>
  {
    const headers = this.sharedService.getHeaders();
    return this.http.get<userViewModel>(`${environment.apiUrl}/api/admin/User/GetUsersList`, {headers});
  }
}
