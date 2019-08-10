import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../_services/people.service'

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    
    peoples;
    headElements = [
        'Nome',
        'Ano Nascimento',
        'Genero',
        'Cor do Olho',
        'Cor do Cabelo',
        'Altura',
    ];

    constructor(
        private peoplesServices: PeopleService
    ) { }

    ngOnInit(){
        this.getPeoples();
    }

    getPeoples(): void {
        this.peoplesServices.getAll().subscribe(response => {
            console.log(response.results);
          this.peoples = response.results;
        },(error) => { console.log(error); });
      }
}
