import {Component, OnInit} from '@angular/core';
import {FilmsService} from '../../_services/films.service'
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-film',
    moduleId: module.id,
    templateUrl: 'film.component.html',
    styleUrls: ['./film.component.css'],
})

export class FilmComponent implements OnInit {

    film = null;

    constructor(
        private filmsServices: FilmsService,
        private router: ActivatedRoute,
    ) {
    }

    ngOnInit() {
        this.getFilm();
    }

    getFilm(): void {
        this.filmsServices.getById(this.router.snapshot.paramMap.get('id')).subscribe(response => {
            console.log(response);
            this.film = response;
        }, (error) => {
            console.log(error);
        });
    }
}
