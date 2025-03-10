import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-index',
  standalone: false,
  
  templateUrl: './user-index.component.html',
  styleUrl: './user-index.component.css'
})
export class UserIndexComponent {

  constructor(private router : Router){}

  btnLogin()
  {
    this.router.navigate(["admin"])
  }
}
