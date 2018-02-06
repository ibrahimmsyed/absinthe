import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { UserAccessModule } from './user-access/user-access.module';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { UserProfileModule } from './user-profile/user-profile.module';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './user-access/login/login.component';

import { LoginGuard } from './services/login.guard';



@NgModule({
  declarations: [
    AppComponent,LoginComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    UserAccessModule,
    UserProfileModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    AuthService,
    AuthGuard,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
