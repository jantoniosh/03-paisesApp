import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li {
      cursor: pointer
    }
  `]
})
export class PorPaisComponent {
  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);
    
    const observerPais = {
      next: (paises: Country[]) => {
        console.log(paises);
        this.paises = paises;
      },
      error: (err: Error) => {
        this.hayError = true;
        this.paises = [];
      }
    }

    this.paisService.buscarPais(this.termino)
      .subscribe(observerPais);
  }

  sugerencias(termino: string) {
    this.hayError = false;

    // const observerPais = {
    //   next: (paises: Country[]) => {
    //     this.paisesSugeridos = paises.splice(0, 5)
    //   },
    //   error: (err: Error) => {
    //     this.paisesSugeridos = [];
    //   }
    // }

    // this.paisService.buscarPais(termino).subscribe(observerPais);
  }
}
