import { CommonModule } from '@angular/common';
import { DashboardComponent } from './../../pages/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { FlexLayoutModule } from '@angular/flex-layout'
import { LoginComponent } from './../../pages/login/login.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './../../pages/registration/registration.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { UsersComponent } from './../../pages/users/users.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@NgModule({
  declarations: [DefaultComponent,DashboardComponent,RegistrationComponent,LoginComponent,UsersComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSlideToggleModule
  ]
})
export class DefaultModule { }
