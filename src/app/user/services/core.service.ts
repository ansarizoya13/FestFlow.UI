import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SharedService } from '../../common/services/shared/shared.service';
import eventsResponse from '../../common/models/eventsResponse';
import submitFeedbackModel from '../../common/models/submitFeedbackModel';

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

  getFeedbacks() : Observable<eventsResponse[]>
  {
    const headers = this.sharedService.getHeaders();
    return this.http.get<eventsResponse[]>(`${environment.apiUrl}/api/Feedback/getFeedbacks`, {headers});
  }

  getEventWithQuestionairre(id : string) : Observable<any>
  {
    const headers = this.sharedService.getHeaders();
    return this.http.get<any>(`${environment.apiUrl}/api/event/getEventWithQuestionairre/${id}`, {headers});
  }

  sendEventResponse(response : any) : Observable<string>
  {
    const headers = this.sharedService.getHeaders();
    return this.http.post<string>(`${environment.apiUrl}/api/event/sendEventResponse`, response, {headers});
  }

  submitFeedback(feedbackDTO : submitFeedbackModel) : Observable<any>
  {
    const headers = this.sharedService.getHeaders();
    const response = this.http.post<any>(`${environment.apiUrl}/api/Feedback/submitFeedback`, feedbackDTO, {headers});
    return response;
  } 
}
