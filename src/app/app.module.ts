import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Page1Component } from './component/page1/page1.component';
import { Page2Component } from './component/page2/page2.component';


const routes: Routes = [
  {path : 'accueil', component : AppComponent},
  {path : 'page1', component : Page1Component},
  {path : 'page2', component : Page2Component}

];

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component
	
  ],
  imports: [ BrowserModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }


