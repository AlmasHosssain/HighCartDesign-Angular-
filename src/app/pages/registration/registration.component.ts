import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ComponentValidator } from './../../validator/Compopnent-validation';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  validationError = {
    'fullName': {
      'required': 'FullName is required',
      'minlength': 'Name length must be greater then 3',
      'maxlength': 'Name length must be less then 30'
    },
    'email': {
      'required': 'Email is required',
      'emailError': 'Email is not correct'
    },
    'password': {
      'required': 'Password is required',
      'minlength': 'Password must be greater then 6 characters'
    },
    'confirmPassword': {
      'required': 'Confirm Password is required'
    },
    'passwordGroup': {
      'passwordMissmatch': 'Password Does Not Matched'
    }
  }

  formError = {
    'fullName': '',
    'email': '',
    'password': '',
    'confirmPassword': '',
    'passwordGroup': ''
  }

  public usedInfo: FormGroup

  constructor(
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {
    this.usedInfo = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: ['', [Validators.required,ComponentValidator.emailCheck('gmail.com')]],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
      },{validators : ComponentValidator.passwordCheck})
    })

    this.usedInfo.valueChanges.subscribe((data) => {
      this.logValidationError(this.usedInfo)
    })
  }

  logValidationError = (group: FormGroup = this.usedInfo
  ) => {
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

  onSubmit() {
    this.logValidationError()
  }
}
