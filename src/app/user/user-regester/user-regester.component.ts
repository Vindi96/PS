import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-user-regester',
  templateUrl: './user-regester.component.html',
  styleUrls: ['./user-regester.component.css']
})
export class UserRegesterComponent implements OnInit {
  registerationForm!: FormGroup;
  user: any = {};
  userSubmited!: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createRegisterationForm();
  }
  // tslint:disable-next-line:typedef
  createRegisterationForm() {
    this.registerationForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, Validators.required],
      mobile: [null, Validators.required]
    }, {
        validators: this.passwordMatchingValidator
      });
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    this.userSubmited = true;
    if (this.registerationForm.valid) {
      console.log(this.registerationForm.controls['password'].value);
      this.user = Object.assign(this.user, this.registerationForm.value);
      this.addUser(this.user);
      this.registerationForm.reset();
      this.userSubmited = false;
    }
  }
  // tslint:disable-next-line:typedef
  addUser(user: any) {
    let users = [];
    if (localStorage.getItem('Users')) {
      users = JSON.parse(JSON.stringify(localStorage.getItem('Users')));
      users = [...users, user];
    } else {
      users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(user));
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
