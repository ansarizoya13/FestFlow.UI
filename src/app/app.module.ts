import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { IndexComponent } from './admin/components/index/index.component';
import { UserIndexComponent } from './common/components/user-index/user-index.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserhomeComponent } from './user/components/userhome/userhome.component';
import { NavbarComponent } from './common/components/navbar/navbar.component';
import { HomeComponent } from './admin/components/home/home.component';
import { ManageUserComponent } from './admin/components/manage-user/manage-user.component';
import { ManageEventsComponent } from './admin/components/manage-events/manage-events.component';
import { ViewProfileComponent } from './common/components/view-profile/view-profile.component';
import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
