import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  title = 'forms - 3 forms';
  email = ['Personal','Business'];
  signupForm: FormGroup;

  ngOnInit(){
    //Do not call the Validators. Only pass the reference.
    this.signupForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null,Validators.required),
    });
  }

}
