import { IPetBase } from './iPetBase';

export class Pet implements IPetBase {
  Id: number;
  Name: string;
  Breed: string;
  Gender: string;
  Price: number;
  CatDog: number;
  Weight: number;
  Height: number;
  City: string;
  Age: number;
  Image?: string;
  Discription: string;

  constructor() {
    this.Id = 0;
    this.Name = '';
    this.Breed = '';
    this.Gender = '';
    this.Price = 0;
    this.CatDog = 1;
    this.Weight = 0;
    this.Height = 0;
    this.City = '';
    this.Age = 0;
    this.Discription = '';
  }
}

