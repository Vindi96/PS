import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '../../../../node_modules/@angular/forms';
import { TabsetComponent } from '../../../../node_modules/ngx-bootstrap/tabs/public_api';
import { IPetBase } from '../../model/iPetBase';
import { Pet } from '../../model/pet';
import { SharedService } from '../../service/shared.service';


@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {
  // @ViewChild('Form') addPropertyForm: NgForm | undefined;
  // @ViewChild('Form') addPropertyForm: NgForm | undefined;
  @ViewChild('formTabs') formTabs!: TabsetComponent;
  addPetForm!: FormGroup;
  nextClicked!: boolean;
  pet = new Pet();
  gender: Array<string> = ['Male', 'Female'];
  breeds: Array<string> = ['Altation', 'German Sheperd', 'pomanarian', 'other'];
  petView: IPetBase = {
    Id: 0,
    Name: '',
    Breed: '',
    Gender: '',
    Price: 0,
    CatDog: 0,
    Weight: 0,
    Height: 0,
    City: '',
    Age: 0,
  };

  constructor(private fb: FormBuilder, private router: Router, private service: SharedService,
  ) { }

  ngOnInit(): void {
    this.CreateAddPetForm();
  }
  // tslint:disable-next-line:typedef
  CreateAddPetForm() {
    this.addPetForm = this.fb.group({
      BasicInfo: this.fb.group({
        CatDog: [null, Validators.required],
        Breed: [null],
        Gender: [null, Validators.required],
        Name: [null, Validators.required],
        Height: [null, Validators.required],
        Weight: [null],
      }),
      PriceInfo: this.fb.group({
        Price: [null, Validators.required],
      }),
      OwnerInfo: this.fb.group({
        City: [null, Validators.required],
        Owner: [null],
        Address: [null, Validators.required],
      }),

      OtherInfo: this.fb.group({
        PostedOn: [null],
        Description: [null]
      })
    });
  }

  // tslint:disable-next-line:typedef
  get BasicInfo() {
    return this.addPetForm.controls.BasicInfo as FormGroup;
  }
  // tslint:disable-next-line:typedef
  get PriceInfo() {
    return this.addPetForm.controls.PriceInfo as FormGroup;
  }
  // tslint:disable-next-line:typedef
  get OwnerInfo() {
    return this.addPetForm.controls.OwnerInfo as FormGroup;
  }
  // tslint:disable-next-line:typedef
  get OtherInfo() {
    return this.addPetForm.controls.OtherInfo as FormGroup;
  }
  // tslint:disable-next-line:typedef
  get CatDog() {
    return this.BasicInfo.controls.CatDog as FormControl;
  }
  // tslint:disable-next-line:typedef
  get Breed() {
    return this.BasicInfo.controls.Breed as FormControl;
  }
  // tslint:disable-next-line:typedef
  get Name() {
    return this.BasicInfo.controls.Name as FormControl;
  }
  // tslint:disable-next-line:typedef
  get Gender() {
    return this.BasicInfo.controls.Gender as FormControl;
  }
  // tslint:disable-next-line:typedef
  get Height() {
    return this.BasicInfo.controls.Height as FormControl;
  }
  // tslint:disable-next-line:typedef
  get Weight() {
    return this.BasicInfo.controls.Weight as FormControl;
  }
  // tslint:disable-next-line:typedef
  get Price() {
    return this.PriceInfo.controls.Price as FormControl;
  }
  // tslint:disable-next-line:typedef
  get BuiltArea() {
    return this.PriceInfo.controls.BuiltArea as FormControl;
  }
  // tslint:disable-next-line:typedef
  get City() {
    return this.OwnerInfo.controls.City as FormControl;
  }
  // tslint:disable-next-line:typedef
  get Address() {
    return this.OwnerInfo.controls.Address as FormControl;
  }
  // tslint:disable-next-line:typedef
  get Owner() {
    return this.OwnerInfo.controls.Address as FormControl;
  }
  // tslint:disable-next-line:typedef
  get RTM() {
    return this.OtherInfo.controls.RTM as FormControl;
  }
  // tslint:disable-next-line:typedef
  get Description() {
    return this.OtherInfo.controls.Description as FormControl;
  }
  // tslint:disable-next-line:typedef
  get PostedOn() {
    return this.OtherInfo.controls.PostedOn as FormControl;
  }
  // tslint:disable-next-line:typedef
  onBack() {
    this.router.navigate(['/']);
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    this.nextClicked = true;
    if (this.allTabsValid()) {
      this.mapProperty();
      this.service.addPet(this.pet);
      console.log('congratz');

      console.log(this.addPetForm);
      if (this.CatDog.value === 2) {
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['/dog-pet']);
      }
    } else {
      console.log('Please review the form and provide all etries');
    }

  }
  mapProperty(): void {
    this.pet.Name = this.Name.value;
    this.pet.Breed = this.Breed.value;
    this.pet.Gender = this.Gender.value;
    this.pet.Price = +this.Price.value;
    this.pet.CatDog = +this.CatDog.value;
    this.pet.Weight = +this.Weight.value;
    this.pet.Height = +this.Height.value;
    this.pet.City = this.City.value;
    this.pet.Discription = this.Description.value;
  }
  allTabsValid(): boolean {
    if (this.BasicInfo.invalid) {
      this.formTabs.tabs[0].active = true;
      return false;
    }
    if (this.PriceInfo.invalid) {
      this.formTabs.tabs[1].active = true;
      return false;
    }
    if (this.OwnerInfo.invalid) {
      this.formTabs.tabs[2].active = true;
      return false;
    }
    if (this.OtherInfo.invalid) {
      this.formTabs.tabs[3].active = true;
      return false;
    }
    return true;
  }
  // tslint:disable-next-line:typedef
  selectTab(tabId: number, IsCurrentTabValid: boolean) {
    this.nextClicked = true;
    if (IsCurrentTabValid) {
      this.formTabs.tabs[tabId].active = true;

    }
  }

}
