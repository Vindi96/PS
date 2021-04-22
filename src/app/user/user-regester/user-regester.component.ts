import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-user-regester',
  templateUrl: './user-regester.component.html',
  styleUrls: ['./user-regester.component.css']
})
export class UserRegesterComponent implements OnInit {
  registerationForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registerationForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, Validators.required),
    }, this.passwordMatchingValidator);
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.registerationForm.controls['password'].value);
  }
  passwordMatchingValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value['password'] === control.value['confirmPassword']) {
      return null;
    }
    return { notmatched: true };
  }
  // tslint:disable-next-line:typedef
  get userName() {
    return this.registerationForm.get('userName') as FormControl;
  }
  // tslint:disable-next-line:typedef
  get email() {
    return this.registerationForm.get('email') as FormControl;
  }
  // tslint:disable-next-line:typedef
  get password() {
    return this.registerationForm.get('password') as FormControl;
  }
  // tslint:disable-next-line:typedef
  get confirmPass() {
    return this.registerationForm.get('confirmPassword') as FormControl;
  }
  // tslint:disable-next-line:typedef
  get mobile() {
    return this.registerationForm.get('mobile') as FormControl;
  }
}
