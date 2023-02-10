import { Component, OnInit } from '@angular/core';
import {Emploi} from "../core/model/Emploi";

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {
  listeEmploi!:Emploi[];
  rechercheParEntreprise!:string;
  constructor() { }

  ngOnInit(): void {
    this.listeEmploi = [
      { reference: 'REF001', titre: 'Développeur Web', entreprise: 'Entreprise A', etat: false },
      { reference: 'REF002', titre: 'Ingénieur Logiciel', entreprise: 'Entreprise B', etat: true },
      { reference: 'REF003', titre: 'Analyste de données', entreprise: 'Entreprise C', etat: false },
      { reference: 'REF004', titre: 'Graphiste', entreprise: 'Entreprise D', etat: true }
    ];
  }
  postuler(emploi: Emploi) {
    console.log(`Vous avez postulé pour l'emploi "${emploi.titre}" chez "${emploi.entreprise}"`);
  }
  bilan() {
    const nombreEmploisOuverts = this.listeEmploi.filter(emploi => emploi.etat).length;
    console.log(`Il y a ${nombreEmploisOuverts} offres d'emploi ouvertes.`);
  }
}
