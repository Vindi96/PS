import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { IPet } from '../model/iPet';
import { map } from 'rxjs/operators';
import { Pet } from 'src/app/model/pet';
import { IPetBase } from './../model/iPetBase';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  getPet(id: number) {
    return this.getAllPets().pipe(
      map(petArray => {
        return petArray.find(p => p.Id === id);
      })
    );
  }
  // tslint:disable-next-line:typedef
  getAllPets(CatDog?: number): Observable<IPet[]> {
    return this.http.get('../../../data/data.json').pipe(
      map(data => {
        const petsArray: Array<IPet> = [];
        for (const id in data) {
          if (CatDog) {
            if (data.hasOwnProperty(id) && data[id].CatDog === CatDog) {
              petsArray.push(data[id]);
            }
          } else {
            petsArray.push(data[id]);
          }
        }
        return petsArray;
      })
    );
  }
  // tslint:disable-next-line:typedef
  addPet(pet: Pet) {
    localStorage.setItem('pet', JSON.stringify(pet));
  }
}
