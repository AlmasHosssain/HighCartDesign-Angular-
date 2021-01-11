import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ComponentValidator } from './../../validator/Compopnent-validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validationError = {
    'email': {
      'required': 'Email is required',
      'emailError': 'Email is not correct'
    },
    'password': {
      'required': 'Password is required',
      'minlength': 'Password must be greater then 6 characters'
    }
  }

  formError = {
    'email': '',
    'password': ''
  }

  public userLogin : FormGroup
  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
     this.userLogin = this.fb.group({
      email: ['', [Validators.required,ComponentValidator.emailCheck('gmail.com')]],
       password : ['',[Validators.required,Validators.minLength(6)]]
     })

     this.userLogin.valueChanges.subscribe((data)=>{
       this.logValidationError(this.userLogin)
     })
  }


  logValidationError = (group : FormGroup = this.userLogin) =>{
    Object.keys(group.controls).forEach((key: string) => {
      let absValue = group.get(key)
      console.log(absValue)
      this.formError[key] = ''
      if (absValue && !absValue.valid && (absValue.touched || absValue.dirty || absValue.value !== '')) {
        let messages = this.validationError[key]
        for(let errorConst in absValue.errors){
            if (errorConst) {
              this.formError[key] += messages[errorConst]
            }
        }
      }
      if (absValue instanceof FormGroup) {
        this.logValidationError(absValue)
      }

    })
  }

  onSubmit(){

  }
}
