import {Component, OnInit} from '@angular/core';
import {PeopleService} from '../../_services/people.service'
import {FilmsService} from '../../_services/films.service'
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
    selector: 'app-table',
    moduleId: module.id,
    templateUrl: 'table.component.html',
    styleUrls: ['./table.component.css'],
})

export class TableComponent implements OnInit {

    peoples = null;
    _peoples = null;
    people = null;
    listaFilms = [];
    headElements = [
        'Nome',
        'Ano Nascimento',
        'Genero',
        'Cor do Olho',
        'Cor do Cabelo',
        'Altura',
        'Filmes',
    ];

    constructor(
        private peoplesServices: PeopleService,
        private filmsServices: FilmsService,
        private modalService: NgbModal,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.getPeoples();
    }

    getPeoples(): void {
        this.peoplesServices.getAll().subscribe(response => {
            response.results.sort((a, b) => {
                if (a.films.length < b.films.length && a.name < b.name) {
                    return -1;
                }
                if (a.films.length > b.films.length && a.name > b.name) {
                    return 1;
                }
                return 0;
            });
            this.peoples = response.results;
            this._peoples = response.results;
        }, (error) => {
            console.log(error);
        });
    }

    search(term: string, item) {
        if (!term) {
            this.peoples = this._peoples;
        } else {
            if (item != 'gender') {
                this.peoples = this.peoples.filter(x =>
                    x[item].trim().toLowerCase().includes(term.trim().toLowerCase())
                );
            } else {
                this.peoples = this._peoples;
                const arrAux = this.peoples;
                this.peoples = [];
                arrAux.forEach(x => {
                    if (term == x[item]) {
                        this.peoples.push(x);
                    }
                });
            }
        }
    }

    openVerticallyCentered(content, row) {
        this.modalService.open(content, {centered: true}).result.then((result) => {
            this.listaFilms = [];
        }, (reason) => {
            this.listaFilms = [];
        });
        this.people = row;
        if (this.people.films.length > 0) {
            this.people.films.forEach(filme => {
                this.filmsServices.get(filme).subscribe(response => {
                    response.id = response.url.match(/\d+/g).map(Number)[0];
                    this.listaFilms.push(response);
                }, (error) => {
                    console.log(error);
                });
            });
        }
    }

    closeModal() {
        this.listaFilms = [];
        this.modalService.dismissAll();
    }

    selecionouFilme(filme) {
        console.log(`film/${filme.id}`);
        this.router.navigate([`/film/${filme.id}`]);
        // this.closeModal();
    }
}
