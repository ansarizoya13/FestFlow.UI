import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../services/core.service';
import eventsResponse from '../../../common/models/eventsResponse';

@Component({
  selector: 'app-feebackhome',
  standalone: false,
  
  templateUrl: './feebackhome.component.html',
  styleUrl: './feebackhome.component.css'
})
export class FeebackhomeComponent implements OnInit {

  feedbacks : eventsResponse[] = []

  constructor(private coreService : CoreService){}

  
  ngOnInit(): void {
    this.getFeedbacks();
  }

  getFeedbacks()
  {
    this.coreService.getFeedbacks().subscribe((res : eventsResponse[]) => {
      this.feedbacks = res;
    }, (err : any) => {
      console.error(err);
    })
  }

}
