import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userService/user-service.service';
import userViewModel from '../../../common/models/userViewModel';
import { ToastrService } from 'ngx-toastr';
import markUserAdmin from '../../../common/models/markUserAdmin';
import markUserInactive from '../../../common/models/markUserInactive';

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
    const opts : markUserAdmin = {
      userId : userId,
      isAdmin : event.target.checked
    }

    this.userService.markUserAdmin(opts).subscribe((res : any) => {
      
      if(res === true)
        this.toastr.success('Done successfully');
      else
        this.toastr.warning("Failed");

      setTimeout(()=>{
        this.getUserList();
      }, 3000);

    }, (err : any) => {
      this.toastr.error('Something went wrong');
      console.error(err);
    })
  }

  chkDeleted_changed(event: any, userId : string)
  {
    const opts : markUserInactive = {
      userId : userId,
      isDeleted : event.target.checked
    }

    this.userService.markUserInactive(opts).subscribe((res : any) => {
      
      if(res === true)
        this.toastr.success('Done successfully');
      else
        this.toastr.warning("Failed");

      setTimeout(()=>{
        this.getUserList();
      }, 3000);

    }, (err : any) => {
      this.toastr.error('Something went wrong');
      console.error(err);
    })

  }

}
