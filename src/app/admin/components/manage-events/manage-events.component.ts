import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userService/user-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-events',
  standalone: false,
  
  templateUrl: './manage-events.component.html',
  styleUrl: './manage-events.component.css'
})
export class ManageEventsComponent implements OnInit {

  eventsList : any[] = [];

  constructor(private userService : UserService, 
    private toastr : ToastrService, private router : Router
    ) {
    
  }

  ngOnInit(): void {
    this.getEventList();
  }

  getEventList()
  {
    this.userService.getEventsList().subscribe((res : any) => {
      this.eventsList = res;
    }, (err : any) => {
      this.toastr.error("Something went wrong");
    })
  }

  drpLive_change(event : any, eventId : string)
  {
    this.userService.makeEventLive(event.target.checked, eventId).subscribe((res : any)=>{
      this.toastr.success("Done");
    }, (err : any) => {
      this.toastr.error("Something went wrong");
    })
  }

  drpFeedback_change(event : any, eventId : string)
  {
    this.userService.makeEventAvailableForFeedback(event.target.checked, eventId).subscribe((res : any)=>{
      this.toastr.success("Done");
    }, (err : any) => {
      this.toastr.error("Something went wrong");
    })
  }

  addEvent_click()
  {
    this.router.navigate(["admin/manage/events/add/questions/1"]);
  }


}
