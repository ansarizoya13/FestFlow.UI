import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import departmentViewModel from '../../models/departmentViewModel';
import signUpModel from '../../models/signUpModel';
import loginModel from '../../models/loginModel';
import { SharedService } from '../../services/shared/shared.service';

@Component({
  selector: 'app-user-index',
  standalone: false,
  
  templateUrl: './user-index.component.html',
  styleUrl: './user-index.component.css'
})
export class UserIndexComponent implements OnInit{

  departments : departmentViewModel[] = [];
  isRegisteredSucessModalVisible : boolean = false;
  isRegisteredFailedModalVisible : boolean = false;

  constructor(private router : Router, 
    private authService : AuthService, 
    private sharedService : SharedService)
  {

  }

  ngOnInit(): void {
    this.getDepartmentsFromService();
  }

  loginForm_submit(form:NgForm)
  {
    const loginForm : loginModel = {
      email : form.value.txtEmail,
      password : form.value.txtPassword
    }

    this.authService.login(loginForm).subscribe((res : any) => {
      if(res.token != null)
      {
        localStorage.setItem('token', res.token)
        form.reset();

        let isAdmin = this.sharedService.isLoggedInUserAdmin()

        if(isAdmin)
          this.router.navigate(['admin/home'])
        else
          this.router.navigate(['user'])
      }
    }, (err : any)=> {
        alert('Invalid Credentials');
    })

  }


  signUpForm_submit(form:NgForm)
  {

    const signUpForm : signUpModel = {
      firstName : form.value.txtSignUpFirstName,
      lastName : form.value.txtSignUpLastName,
      email : form.value.txtSignUpEmail,
      studentEnrollmentNumber : form.value.txtStudentEnrollment,
      password : form.value.txtSignUpPassword,
      branchId : form.value.drpDepartment
    }

    this.authService.signUp(signUpForm).subscribe((res : any) => {
        if(res === true)
        {
          form.reset();

          this.isRegisteredSucessModalVisible = true;

          if(this.isRegisteredFailedModalVisible === true)
            this.isRegisteredFailedModalVisible = false;

          setTimeout(() => {
            this.isRegisteredSucessModalVisible = false;
          }, 3000);
        }
        else
        {
          this.isRegisteredFailedModalVisible = true;
        }
    },
    (err : any) => {
      console.log(err);
    })

  }


  getDepartmentsFromService()
  {
    this.authService.getDepartments().subscribe((res : any) => {
        this.departments = res;
      },
      (err : any) => {
        console.error(err);
      })
  }
}
