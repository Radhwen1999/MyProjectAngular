import { Component, OnInit } from '@angular/core';
import {Article} from "../core/model/Article";

@Component({
  selector: 'app-article-component',
  templateUrl: './article-component.component.html',
  styleUrls: ['./article-component.component.css']
})
export class ArticleComponentComponent implements OnInit {
  titre = 'Les articles du jour';
  nombreArticles!:number;
  listeArticles: Article[] = [
    { titre: 'le champion du monde', contenu: 'le champion du monde est', auteur: 'medTaher',date:'12/12/2015',category:'sport' },
    { titre: 'les nouveaux parents', contenu: 'les nouveaux parents', auteur: 'AhmedSaid',date:'11/11/2018',category:'Education' },
    { titre: 'comment écrire votre CV', contenu: 'Pour réussir a décroche un emploi', auteur: 'MarieElsa',date:'02/04/2017',category:'Travail' },

  ];
  constructor() { }

  ngOnInit(): void {
    this.nombreArticles=this.listeArticles.length;
  }

}
