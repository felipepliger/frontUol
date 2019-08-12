import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AdminLayoutRoutes} from './admin-layout.routing';

import {TableComponent} from '../../pages/table/table.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FilmComponent} from '../../pages/film/film.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        NgbModule
    ],
    declarations: [
        TableComponent,
        FilmComponent,
    ]
})

export class AdminLayoutModule {
}
