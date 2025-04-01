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
import { loginGuard } from './common/guards/login/login.guard';
import { UserstartComponent } from './user/components/userstart/userstart.component';
import { EventhomeComponent } from './user/components/eventhome/eventhome.component';
import { FeebackhomeComponent } from './user/components/feebackhome/feebackhome.component';
import { ViewEventComponent } from './user/components/view-event/view-event.component';


const routes: Routes = [
  {
    path: "",
    component: UserIndexComponent,
    canActivate: [loginGuard]
  },
  {
    path: "admin",
    component: IndexComponent,
    canActivate: [adminGuard],
    children: [
      { path: "", component: HomeComponent },
      { path: "home", component: HomeComponent },
      { path: "manage/users", component: ManageUserComponent },
      { path: "manage/events", component: ManageEventsComponent },
      { path: "profile", component: ViewProfileComponent }
    ]
  },
  {
    path: "user",
    component : UserstartComponent,
    canActivate: [userGuard],
    children: [
      { path: "", component: UserhomeComponent },
      { path: "home", component: UserhomeComponent },
      { path: "profile", component: ViewProfileComponent },
      { path: "events", component: EventhomeComponent },
      { path : "events/:id", component : ViewEventComponent},
      { path: "feedbacks", component: FeebackhomeComponent }
    ]
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
