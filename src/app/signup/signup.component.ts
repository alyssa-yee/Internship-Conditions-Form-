import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  title = 'forms - 3 forms';
  email = ['Personal','Business'];
  signupForm: FormGroup;

  ngOnInit(){
    //Do not call the Validators. Only pass the reference.
    this.signupForm = new FormGroup({
      'signupemail': new FormControl(null, [Validators.required, Validators.email]),
      'name': new FormControl(null, [Validators.required]),      
      'signuppassword': new FormControl(null, [Validators.required]),
    
    });
  }

}
