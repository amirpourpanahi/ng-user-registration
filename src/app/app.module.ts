import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { MatButtonModule } from '@angular/material/button';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth-guard.service';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
