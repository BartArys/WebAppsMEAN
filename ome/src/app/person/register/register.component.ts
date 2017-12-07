import { Component, OnInit } from '@angular/core';
import { FormGroup, ValidationErrors, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

function passwordValidator(length: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    return control.value.length < length ? {
      'passwordTooShort':
        { requiredLength: length, actualLength: control.value.length }
    } : null;
  };
}

function comparePasswords(control: AbstractControl): { [key: string]: any } {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  return password.value === confirmPassword.value ? null : { 'passwordsDiffer': true };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public person: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.person = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email], this.serverSideValidateEmail()],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, passwordValidator(12)]],
        confirmPassword: ['', Validators.required]
      }, { validator: comparePasswords })
    });
  }

  serverSideValidateEmail(): ValidatorFn {
    return (control: AbstractControl):
      Observable<{ [key: string]: any }> => {
      return this.authService.
        checkEmailAvailability(control.value).map(available => {
          if (!available) {
            return null;
          }
          return { personAlreadyExists: true };
        });
    };
  }

  getFormValidationErrors() {
    Object.keys(this.person.controls).forEach(key => {

      const controlErrors: ValidationErrors = this.person.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
        });
      }
    });
  }

  get passwordControl(): FormControl {
    return <FormControl>this.person.get('passwordGroup').get('password');
  }

  register() {
    const firstname = this.person.value.firstname;
    const lastname = this.person.value.lastname;
    const email = this.person.value.email;
    const password = this.passwordControl.value;

    this.authService.register(firstname, lastname, email, password)
      .subscribe(user => {
        this.router.navigate(['/event/list']);
      });
  }

}


