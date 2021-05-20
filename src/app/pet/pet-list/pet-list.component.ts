import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../service/shared.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { IPet } from 'src/app/model/iPet';


@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  CatDog = 2;
  constructor(private route: ActivatedRoute, private service: SharedService) { }
  pets!: IPet[];

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.CatDog = 1;
    }
    this.service.getAllPets(this.CatDog).subscribe(
      data => {
        this.pets = data;
        const newPet = JSON.parse(localStorage.getItem('pet') || '{}');
        if (newPet) {
          this.pets = [newPet, ...this.pets];
        }
        console.log(data);
        console.log(this.route.snapshot.url.toString());
      }, error => {
        console.log('httperror:');
        console.log(error);
      }
    );
  }
}
