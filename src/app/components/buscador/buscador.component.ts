import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  heroes:any[]=[];
  cadena:string;
  constructor( private _activatedRoute:ActivatedRoute,
             private _heroesServices:HeroesService  ) {

   }

  ngOnInit() {
    this._activatedRoute.params.subscribe( params => {
        this.cadena = params['cadena'];
        this.heroes = this._heroesServices.buscarData(params['cadena']);

        console.log(this.heroes)
    } );
  }

}
