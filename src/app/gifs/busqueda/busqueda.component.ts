import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) { }

  /*Creamos nuestra funcion para buscar que hace referncia al input html */
  buscar() {
    // Guardamos el valor en una variable
    const valor = this.txtBuscar.nativeElement.value;

    if (valor.trim().length === 0){
      return;
    }

    this.gifsService.buscarGifs(valor);

    // console.log(valor);
    // Limpiamos nuestro input con los native elements de angular core
    this.txtBuscar.nativeElement.value = '';

    // Hacemos focus al input html
    // tslint:disable-next-line: no-unused-expression
    this.txtBuscar.nativeElement.focus;
  }
}
