import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  public propertyId = 0;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.propertyId = this.route.snapshot.params.id;
    this.route.params.subscribe(
      (params) => {
        this.propertyId = params.id;
      }
    );
  }
  // tslint:disable-next-line:typedef
  goToNextPage() {
    this.propertyId++;
    this.router.navigate(['property-details', this.propertyId]);
  }

}
