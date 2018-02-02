import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './services/auth.guard';
import { LoginGuard } from './services/login.guard';
import { LoginComponent } from './user-access/login/login.component';
import { MyProfileComponent } from './user-profile/my-profile/my-profile.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent, canActivate: [LoginGuard] },
    { path: 'profile', component: MyProfileComponent, canActivate: [AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);