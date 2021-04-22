import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { NgForm } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onBack() {
    this.router.navigate(['/']);
  }
  // tslint:disable-next-line:typedef
  onSubmit(Form: NgForm) {
    console.log('congratz');
    console.log(this.addPropertyForm);
  }

}
