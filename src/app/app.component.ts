import { Component, OnInit } from '@angular/core';







@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
  
  


})
export class AppComponent implements OnInit {

  day: any[] = ["Lundi", "Mardi", "Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];

  peopleCountry : any[] = [
    {'Country' : 'Royaume-Uni', 'People' : [{ 'Name' : 'SMITH', 'FirstName' : 'Meyers' },{ 'Name' : 'JONHSON', 'FirstName' : 'Heather' } ]},
    {'Country' : 'France', 'People' : [{ 'Name' : 'CHIRAC', 'FirstName' : 'Patrick' },{ 'Name' : 'TUCHE', 'FirstName' : 'Pierre' } ]},
    {'Country' : 'Espagne', 'People' : [{ 'Name' : 'MARGARITA', 'FirstName' : 'Sonia' },{ 'Name' : 'ESPERANZO', 'FirstName' : 'Julio' } ]}
  ];



  title = 'Mon outil commun';
 
 constructor(){}
 
  ngOnInit()
  {

  }
}


