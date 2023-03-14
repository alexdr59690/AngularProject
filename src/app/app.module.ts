import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Page1Component } from './component/page1/page1.component';
import { Page2Component } from './component/page2/page2.component';
import { CalculatriceComponent } from './component/calculatrice/calculatrice.component';
import { AccueilComponent } from './component/accueil/accueil.component';


const routes: Routes = [
  {path: '', redirectTo:'accueil',component:AccueilComponent},
  {path : 'accueil', component : AccueilComponent},
  {path : 'page1', component : Page1Component},
  {path : 'page2', component : Page2Component},
  {path : 'calculatrice', component : CalculatriceComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    CalculatriceComponent,
    AccueilComponent
	
  ],
  imports: [ BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }


