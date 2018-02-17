import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { SearchService } from './services/search.service';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { CityComponent } from './search/city/city.component';
import { ButtonsComponent } from './search/buttons/buttons.component';
import { CityDetailsComponent } from './city-details/city-details.component';
import { ForecastComponent } from './city-details/forecast/forecast.component';
import { ConvertPipe } from './convert.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CityComponent,
    ButtonsComponent,
    CityDetailsComponent,
    ForecastComponent,
    ConvertPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyADMXpzg15Hp_vFmwxKJbO60isiYEBNme8'
    })
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
