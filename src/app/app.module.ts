import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { EmailrightsideComponent } from './emailrightside/emailrightside.component';
import { EmailleftsideComponent } from './emailleftside/emailleftside.component';

const routes: Routes = [
{
  path: '',
  component: LoginComponent,
  pathMatch: 'full',
},

{
  path: 'signup',
  component: SignupComponent,
  pathMatch:'full'
},

{
  path: 'email',
  component: EmailComponent,
  pathMatch: 'full'
},


]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    EmailComponent,
    EmailrightsideComponent,
    EmailleftsideComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
