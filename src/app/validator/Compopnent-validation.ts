import { AbstractControl } from "@angular/forms";

export class ComponentValidator {
  static passwordCheck = (control: AbstractControl): { [key: string]: any } | null => {
    let password = control.get('password')
    let confirmPassword = control.get('confirmPassword')
    if (password.value == confirmPassword.value || confirmPassword.pristine) {
      return null
    } else {
      return { 'passwordMissmatch': true }
    }
  }

  static emailCheck = (domainName: string) => {
    return (control: AbstractControl): { [key: string]: any } | null => {
      let email = control.value;
      let domain = email.substring(email.lastIndexOf('@')+1)
      if (email === '' || email.includes('@') && domainName.toLowerCase()==domain.toLowerCase()) {
        return null
      } else {
        return { 'emailError': true }
      }
    }
  }
}
