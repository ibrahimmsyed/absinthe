import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from '../services/auth.service';
import { CalendarComponent } from './calendar/calendar.component';
import { ProfileComponent } from './profile/profile.component';

import { Routes, RouterModule } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';


export const profileRoutes: Routes = [
  {
      path: 'user-profile', component: MyProfileComponent,
      children: [
        { path: 'calendar', component: CalendarComponent },
        { path: 'profile',  component: ProfileComponent }
          
      ]
  }
];
// const routes: Routes = [
//   { path: 'user-profile/calendar', component: CalendarComponent },
//   { path: 'user-profile/profile', component: ProfileComponent }
// ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(profileRoutes)
  ],
  declarations: [CalendarComponent, ProfileComponent,MyProfileComponent],
  providers: [AuthService],
  exports:[CalendarComponent,ProfileComponent,MyProfileComponent]
})
export class UserProfileModule { }
