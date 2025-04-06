import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { IndexComponent } from './admin/components/index/index.component';
import { UserIndexComponent } from './common/components/user-index/user-index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserhomeComponent } from './user/components/userhome/userhome.component';
import { NavbarComponent } from './common/components/navbar/navbar.component';
import { HomeComponent } from './admin/components/home/home.component';
import { ManageUserComponent } from './admin/components/manage-user/manage-user.component';
import { ManageEventsComponent } from './admin/components/manage-events/manage-events.component';
import { ViewProfileComponent } from './common/components/view-profile/view-profile.component';
import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { UserstartComponent } from './user/components/userstart/userstart.component';
import { FeebackhomeComponent } from './user/components/feebackhome/feebackhome.component';
import { EventhomeComponent } from './user/components/eventhome/eventhome.component';
import { authInterceptorInterceptor } from './common/interceptors/auth-interceptor.interceptor';
import { ViewEventComponent } from './user/components/view-event/view-event.component';
import { SubmitFeedbackComponent } from './user/components/submit-feedback/submit-feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    IndexComponent,
    UserIndexComponent,
    UserhomeComponent,
    NavbarComponent,
    HomeComponent,
    ManageUserComponent,
    ManageEventsComponent,
    ViewProfileComponent,
    PageNotFoundComponent,
    UserstartComponent,
    FeebackhomeComponent,
    EventhomeComponent,
    ViewEventComponent,
    SubmitFeedbackComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut : 3000,
      positionClass : 'toast-top-right',
    }),
    SelectDropDownModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
