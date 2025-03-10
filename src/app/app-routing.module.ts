import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './admin/index/index.component';
import { UserIndexComponent } from './user/user-index/user-index.component';


const routes: Routes = [
  {
    path : "",
    component : UserIndexComponent
  },
  {
    path : 'admin',
    component : IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
