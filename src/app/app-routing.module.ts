import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './admin/components/index/index.component';
import { UserIndexComponent } from './common/components/user-index/user-index.component';


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
