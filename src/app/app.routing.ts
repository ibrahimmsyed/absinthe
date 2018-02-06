import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './services/auth.guard';
import { LoginGuard } from './services/login.guard';
import { LoginComponent } from './user-access/login/login.component';
import { MyProfileComponent } from './user-profile/my-profile/my-profile.component';
import { ProfileComponent } from './user-profile/profile/profile.component';
import { CalendarComponent } from './user-profile/calendar/calendar.component';

const appRoutes: Routes = [
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
    //{ path: 'profile', component: MyProfileComponent, canActivate: [AuthGuard]},
    { path: 'user-profile', loadChildren: './user-profile/user-profile.module#UserProfileModule', canActivate: [AuthGuard]},
    // children: [
    //      { path: 'myprofile', component: ProfileComponent },
    //      { path: 'calendar', component: CalendarComponent, outlet: 'my-profile' }
    //   ]
    //},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);