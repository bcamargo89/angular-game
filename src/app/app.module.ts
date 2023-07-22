import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'; 

import { AppComponent } from './app.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { FilterPipe } from './pipes/filter.pipe';
import { DetailGameComponent } from './components/detail-game/detail-game.component';

import { RouterModule } from '@angular/router'; 

@NgModule({
  declarations: [
    AppComponent,
    JuegosComponent,
    FilterPipe,
    DetailGameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {path:'juegos',component:JuegosComponent},
      {path:'detailJuego',component:DetailGameComponent},
      {path:'**',redirectTo:'/',pathMatch:'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
