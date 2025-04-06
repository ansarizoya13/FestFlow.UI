import { Component } from '@angular/core';
import { SharedService } from '../../services/shared/shared.service';
import { Router } from '@angular/router';
import { NAME } from '../../constants/claims';
import { AuthService } from '../../services/auth.service';
import { CoreService } from '../../../user/services/core.service';
import eventsResponse from '../../models/eventsResponse';

@Component({
  selector: 'app-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  name : string = ""
  isAdmin : boolean = false;
  // eventCount : number = 0;
  // feedbackCount : number = 0;

  constructor(private sharedService : SharedService, private authService : AuthService, private coreService : CoreService) {
    
  }

  ngOnInit(): void {
    this.name = this.sharedService.getDataFromClaims(NAME)
    this.isAdmin = this.sharedService.isLoggedInUserAdmin();
    // this.getEventCount();
  }
  
  // getEventCount()
  // {
  //   this.coreService.getEvents().subscribe((res : eventsResponse[]) => {
  //     this.eventCount = res.length;
  //   }, (err : any) => {
  //     console.error(err);
  //   })
  // }

  logout()
  {
    this.authService.logout();
  }


}
