import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroes:any[]=[];
  @Input() index:number;

  // @Output() heroeSeleccionado:EventEmitter<number>;

  constructor( private _router:Router ) {
      // this.heroeSeleccionado= new EventEmitter();

    }

  ngOnInit() {
  }

  verHeroe(){
    // console.log( this.index );
    this._router.navigate( ["/personaje", this.index ] );
    // this.heroeSeleccionado.emit(this.index);
  }

}
