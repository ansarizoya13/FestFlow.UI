import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SharedService } from '../../common/services/shared/shared.service';
import eventsResponse from '../../common/models/eventsResponse';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private http : HttpClient, private sharedService : SharedService) { }

  getEvents() : Observable<eventsResponse[]>
  {
    const headers = this.sharedService.getHeaders();
    return this.http.get<eventsResponse[]>(`${environment.apiUrl}/api/event/getevents`, {headers});
  }
}
