import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  getAllProperties() {
    return this.http.get('../../../data/data.json');
  }
}
