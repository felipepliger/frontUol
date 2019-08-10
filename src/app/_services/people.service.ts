import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root',
  })
export class PeopleService{

  private url = "https://swapi.co/api/";

  constructor(
    private http: HttpClient
  ) {}

  getAll() {
    return this.http.get(this.url + "people");
  }

}
