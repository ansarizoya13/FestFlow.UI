import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from '../../services/core.service';
import eventsResponse from '../../../common/models/eventsResponse';

@Component({
  selector: 'app-userhome',
  standalone: false,

  templateUrl: './userhome.component.html',
  styleUrl: './userhome.component.css'
})
export class UserhomeComponent implements OnInit {
  
  eventCount : number = 0;
  feedbackCount : number = 0;

  constructor(private router: Router, private coreService: CoreService) {

  }

  ngOnInit(): void {

    this.getEventsCount();
    this.getFeedbacksCount();

  }

  getEventsCount(){
    this.coreService.getEvents().subscribe((res: eventsResponse[]) => {
      this.eventCount = res.length;
    }, (err: any) => {
      console.error(err);
    })
  }

  getFeedbacksCount(){
    this.coreService.getFeedbacks().subscribe((res: eventsResponse[]) => {
      this.feedbackCount = res.length;
    }, (err: any) => {
      console.error(err);
    })
  }

  card_click(path: string) {
    this.router.navigate([path])
  }

}
