import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userService/user-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  dashboardStats : any = {}

  constructor(
    private userService : UserService, 
    private toastr:ToastrService) 
    {}
  
  ngOnInit(): void {
    this.getStatistics();
  }

  getStatistics()
  {
    this.userService.getStatistics().subscribe((res:any)=>{
      this.dashboardStats = {
        users : res.users,
        students : res.students,
        events : res.events,
        feedbacks : res.feedbacks,
        questions : res.questions,
        answers : res.answers,
        departments : res.departments,
        admins : res.admins
      };

      console.log(this.dashboardStats); 
      
    }, (err : any) => {
      this.toastr.error('Something went wrong');
    })
  }

}
