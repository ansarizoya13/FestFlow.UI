import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../services/core.service';
import eventsResponse from '../../../common/models/eventsResponse';

@Component({
  selector: 'app-eventhome',
  standalone: false,
  
  templateUrl: './eventhome.component.html',
  styleUrl: './eventhome.component.css'
})
export class EventhomeComponent implements OnInit{

  events : eventsResponse[]; 

  constructor(private coreService : CoreService) {
  }
  
  ngOnInit() {
    this.getEvents();
  }

  

  getEvents()
  {
    this.coreService.getEvents().subscribe((res : eventsResponse[]) => {
      this.events = res;
    }, (err : any) => {
      console.error(err);
    })
  }
}
