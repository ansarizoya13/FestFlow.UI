import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userService/user-service.service';
import userViewModel from '../../../common/models/userViewModel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-user',
  standalone: false,
  
  templateUrl: './manage-user.component.html',
  styleUrl: './manage-user.component.css'
})
export class ManageUserComponent implements OnInit {
  
  usersList : userViewModel[] = [];

  constructor(private userService : UserService, private toastr : ToastrService) {
    
  }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList()
  {
    this.userService.getUsersList().subscribe((res:any) => {
      this.usersList = res;      
    }, (err:any) => {
      console.error(err);
    })
  }

  chkAdmin_changed(event : any, userId : string)
  { 

  }

}
