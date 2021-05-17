import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { Pet } from 'src/app/model/pet';
import { SharedService } from '../../service/shared.service';
import { IPet } from 'src/app/model/iPet';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {
  public petId = 0;
  pet = new Pet();
  constructor(private route: ActivatedRoute, private router: Router, private service: SharedService) { }

  ngOnInit(): void {
    this.petId = +this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (params) => {
        this.petId = +params['id'];
        this.service.getPet(this.petId).subscribe(
          /*(data: Pet) => {
            this.pet = data;
          }*/
        );
      }
    );
  }
}
