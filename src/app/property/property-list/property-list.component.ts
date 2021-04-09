import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../service/shared.service';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor(private service: SharedService) { }
  properties: any;

  ngOnInit(): void {
    this.service.getAllProperties().subscribe(
      data => {
        this.properties = data;
        console.log(data);
      }
    );
  }
}
