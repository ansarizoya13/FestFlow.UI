import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  dashboardStats = {
    users: 150,
    students: 120,
    events: 35,
    feedbacks: 70
  };

}
