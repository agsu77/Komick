import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
})
export class PersonajeComponent {

  _personaje:any={}; // variable _personaje va a valer objeto dado de getPersonaje
  imgCasa:string;
  constructor( private actRoute:ActivatedRoute,
              private _heroesService:HeroesService
  ) {

      this.actRoute.params.subscribe( params =>{ //recibo el parametro dado al router, lo saco de la url
        this._personaje = this._heroesService.getPersonaje(params['id']);
        console.log(this._personaje);
      } );

  }



}
