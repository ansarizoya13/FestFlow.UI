import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  standalone: false,
  
  templateUrl: './userhome.component.html',
  styleUrl: './userhome.component.css'
})
export class UserhomeComponent {

  constructor(private router : Router) {
    
  }

  card_click(path : string)
  {
    this.router.navigate([path])
  }

}
