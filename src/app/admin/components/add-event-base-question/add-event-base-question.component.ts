import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Questions, EventLSModel } from '../../../common/models/eventLSModel';
import { AuthService } from '../../../common/services/auth.service';
import departmentViewModel from '../../../common/models/departmentViewModel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-event-base-question',
  standalone: false,
  
  templateUrl: './add-event-base-question.component.html',
  styleUrl: './add-event-base-question.component.css'
})
export class AddEventBaseQuestionComponent implements OnInit {

  drpBranchesOptions : departmentViewModel[] = [];

  constructor(private router : Router, private authService : AuthService, private toastr : ToastrService) {
    
  }
  ngOnInit(): void {
    this.getDepartmentsFromService();
  }


  drpBranchesConfig = {
    displayKey: 'name', // Key to display in the dropdown
    search: true,       // Enable search functionality
    placeholder: 'Select Branches', // Placeholder text
  };

  goToNext(form : NgForm) {

    const eventData : EventLSModel = {
      name : form.value.eventName,
      description : form.value.eventDescription,
      branches : form.value.branches.map((branch: { id: string; }) => branch.id),
      questions : []
    } 

    const event = localStorage.getItem('event');

    if(event === null)
    {
      localStorage.setItem('event', JSON.stringify(eventData));
      this.router.navigate(['admin/manage/events/add/questions/2'])
    }
    else
    {
      localStorage.removeItem('event');
      this.toastr.error('Something went wrong')
    }
  }


  getDepartmentsFromService()
  {
    this.authService.getDepartments().subscribe((res : any) => {
        this.drpBranchesOptions = res;
      },
      (err : any) => {
        console.error(err);
      })
  }

}
