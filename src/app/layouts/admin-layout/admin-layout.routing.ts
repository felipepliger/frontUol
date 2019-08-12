import {Routes} from '@angular/router';

import {TableComponent} from '../../pages/table/table.component';
import {FilmComponent} from '../../pages/film/film.component';

export const AdminLayoutRoutes: Routes = [
    {path: 'table', component: TableComponent},
    {path: 'film/:id', component: FilmComponent},
];
