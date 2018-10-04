import { Component, OnInit } from '@angular/core';
import { HeroesService, InterfaceHeroes } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  _heroes:InterfaceHeroes[]= [];

  constructor( private _heroesServices:HeroesService,
              private _router:Router,
  ) {

  }

  ngOnInit() {
    this._heroes = this._heroesServices.getHeroes();

    // console.log(this._heroes);
  }

verHeroe( id:number ){
  console.log(id);
  this._router.navigate( ["/personaje",id] );
}

}
