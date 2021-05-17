import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from './service/shared.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRegesterComponent } from './user/user-regester/user-regester.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PetDetailComponent } from './pet/pet-detail/pet-detail.component';
import { AddPetComponent } from './pet/add-pet/add-pet.component';
import { PetCardComponent } from './pet/pet-card/pet-card.component';
import { PetListComponent } from './pet/pet-list/pet-list.component';


const appRoutes: Routes = [
  { path: 'add-pet', component: AddPetComponent },
  { path: 'dog-pet', component: PetListComponent },
  { path: 'pet-detail/:id', component: PetDetailComponent },
  { path: 'user-regester', component: UserRegesterComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: '', component: PetListComponent },
  { path: '**', component: PetListComponent },

];
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UserRegesterComponent,
    UserLoginComponent,
    PetDetailComponent,
    AddPetComponent,
    PetCardComponent,
    PetListComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    TooltipModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
