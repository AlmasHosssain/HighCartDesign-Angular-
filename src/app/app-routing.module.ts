import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RegistrationComponent } from './pages/registration/registration.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path : '',
    component : DefaultComponent,
    children : [
      {
        path : '',
        component : DashboardComponent
      },
      {
        path : 'login',
        component : LoginComponent
      },
      {
        path : 'registration',
        component : RegistrationComponent
      },
      {
        path : 'users',
        component : UsersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
