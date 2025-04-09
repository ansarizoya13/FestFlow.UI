import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import userViewModel from '../../../common/models/userViewModel';
import { SharedService } from '../../../common/services/shared/shared.service';
import markUserAdmin from '../../../common/models/markUserAdmin';
import markUserInactive from '../../../common/models/markUserInactive';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient, private sharedService : SharedService) { }

  getUsersList() : Observable<userViewModel>
  {
    const headers = this.sharedService.getHeaders();
    return this.http.get<userViewModel>(`${environment.apiUrl}/api/User/GetUsersList`, {headers});
  }

  markUserInactive(opts : markUserInactive) : Observable<boolean>
  {
    const headers = this.sharedService.getHeaders();
    return this.http.post<boolean>(`${environment.apiUrl}/api/User/set-inactive`, opts, {headers})
  }

  markUserAdmin(opts : markUserAdmin) : Observable<boolean>
  {
    const headers = this.sharedService.getHeaders();
    return this.http.post<boolean>(`${environment.apiUrl}/api/User/set-admin`, opts, {headers})
  }

  getEventsList() : Observable<any>
  {
    const headers = this.sharedService.getHeaders();
    const response = this.http.get<any>(`${environment.apiUrl}/api/event/geteventslist`, {headers})
    return response;
  }

  makeEventLive(state : boolean, eventId : string) : Observable<any>
  {
    const opts = {
      eventId : eventId,
      value : state
    };

    const headers = this.sharedService.getHeaders();
    const response = this.http.post<any>(`${environment.apiUrl}/api/event/makeEventLive`, opts, {headers});
    return response;
  }

  makeEventAvailableForFeedback(state : boolean, eventId : string) : Observable<any>
  {
    const opts = {
      eventId : eventId,
      value : state
    };

    const headers = this.sharedService.getHeaders();
    const response = this.http.post<any>(`${environment.apiUrl}/api/event/makeEventAvailableForFeedback`, opts, {headers});
    return response;
  }

  getEventsQuestionsAnsswers(eventId : string) : Observable<any>
  {
    const headers = this.sharedService.getHeaders();
    const response = this.http.get<any>(`${environment.apiUrl}/api/event/GetEventsResponses/${eventId}`, {headers})
    return response;
  }
}
