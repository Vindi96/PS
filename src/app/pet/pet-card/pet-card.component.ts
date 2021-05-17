import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css']
})
export class PetCardComponent implements OnInit {

  constructor() { }
  @Input() pet: any;
  @Input()
  hideIcon!: boolean;

  ngOnInit(): void {
  }

}
