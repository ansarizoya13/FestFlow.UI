import { Component, OnInit } from '@angular/core';
import profileViewModel from '../../models/profileViewModel';
import { SharedService } from '../../services/shared/shared.service';
import { DEPARTMENTNAME, EMAIL, ENROLLMENTNUMBER, NAME } from '../../constants/claims';

@Component({
  selector: 'app-view-profile',
  standalone: false,
  
  templateUrl: './view-profile.component.html',
  styleUrl: './view-profile.component.css'
})
export class ViewProfileComponent{

  constructor(private sharedService : SharedService) {
    
  }

  populateFields() : profileViewModel
  {
    return {
      name : this.sharedService.getDataFromClaims(NAME),
      email : this.sharedService.getDataFromClaims(EMAIL),
      enrollmentNumber : this.sharedService.getDataFromClaims(ENROLLMENTNUMBER),
      branch : this.sharedService.getDataFromClaims(DEPARTMENTNAME)
    }
  }

}
