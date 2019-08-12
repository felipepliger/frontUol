import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FilmResponse} from './response/films.respose';

@Injectable({
    providedIn: 'root',
})
export class FilmsService {

    private url = 'https://swapi.co/api/';

    constructor(
        private http: HttpClient
    ) {
    }

    get(url) {
        return this.http.get<FilmResponse>(`${url}`);
    }

    getById(id) {
        return this.http.get<FilmResponse>(`${this.url}films/${id}`);
    }

}
