import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {
  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
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

    this.paisService.buscarCapital(this.termino)
      .subscribe(observerPais);
  }

  sugerencias(termino: string) {
    this.hayError = false;
  }
}
