import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './admin/components/index/index.component';
import { UserIndexComponent } from './common/components/user-index/user-index.component';
import { UserhomeComponent } from './user/components/userhome/userhome.component';
import { adminGuard } from './common/guards/admin/admin.guard';
import { userGuard } from './common/guards/user/user.guard';
import { HomeComponent } from './admin/components/home/home.component';
import { ManageUserComponent } from './admin/components/manage-user/manage-user.component';
import { ManageEventsComponent } from './admin/components/manage-events/manage-events.component';
import { ViewProfileComponent } from './common/components/view-profile/view-profile.component';
import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path : "", 
    component : UserIndexComponent 
  },
  {
    path : "admin",
    component : IndexComponent,
    canActivate : [adminGuard],
    children : [
      { path : "home", component : HomeComponent},
      { path : "manage/users", component : ManageUserComponent},
      { path : "manage/events", component : ManageEventsComponent},
      { path : "profile", component : ViewProfileComponent}
    ]
  },
  {
    path : "user",
    children : [
      {
        path : "",
        component : UserhomeComponent,
        canActivate : [userGuard]
      }
    ]
  },
  {
    path : "**",
    component : PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
