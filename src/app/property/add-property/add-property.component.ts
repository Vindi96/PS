import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { TabsetComponent } from '../../../../node_modules/ngx-bootstrap/tabs/public_api';
import { IPropertyBase } from './../../model/iPropertyBase';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm | undefined;
  @ViewChild('formTabs')
  formTabs!: TabsetComponent;
  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex'];
  furnishTypes: Array<string> = ['Fuly', 'Semi', 'Unfurnished'];
  propertyView: IPropertyBase = {
    Id: 0,
    Name: '',
    FType: '',
    PType: '',
    SellRent: 0,
    BuiltArea: 0,
    BHK: 0,
    City: '',
    RTM: 0,
    Price: 0
  };

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
  // tslint:disable-next-line:typedef
  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }

}
