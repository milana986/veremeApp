import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { CityDetailsComponent } from './city-details/city-details.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: ':name', component: CityDetailsComponent},
  { path: '**',   redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
