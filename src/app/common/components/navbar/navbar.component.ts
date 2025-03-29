import { Component } from '@angular/core';
import { SharedService } from '../../services/shared/shared.service';
import { Router } from '@angular/router';
import { NAME } from '../../constants/claims';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  name : string = ""
  isAdmin : boolean = false;

  constructor(private sharedService : SharedService, private authService : AuthService) {
    
  }

  ngOnInit(): void {
    this.name = this.sharedService.getDataFromClaims(NAME)
    this.isAdmin = this.sharedService.isLoggedInUserAdmin();
  }
  
  logout()
  {
    this.authService.logout();
  }
}
