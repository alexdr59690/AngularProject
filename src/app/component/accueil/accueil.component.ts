import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
 day: any[] = ["Lundi", "Mardi", "Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];

  peopleCountry : any[] = [
    {'Country' : 'Royaume-Uni', 'People' : [{ 'Name' : 'SMITH', 'FirstName' : 'Meyers' },{ 'Name' : 'JONHSON', 'FirstName' : 'Heather' } ]},
    {'Country' : 'France', 'People' : [{ 'Name' : 'CHIRAC', 'FirstName' : 'Patrick' },{ 'Name' : 'TUCHE', 'FirstName' : 'Pierre' } ]},
    {'Country' : 'Espagne', 'People' : [{ 'Name' : 'MARGARITA', 'FirstName' : 'Sonia' },{ 'Name' : 'ESPERANZO', 'FirstName' : 'Julio' } ]}
  ];

  title = 'Mon outil commun';
}
