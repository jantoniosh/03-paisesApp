import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
    selector: 'app-por-region',
    templateUrl: './por-region.component.html'
})
export class PorRegionComponent {

    regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
    regionActiva: string = '';
    paises: Country[] = [];

    constructor(private paisService: PaisService) { }

    getClassCSS(region: string): string {
        return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'
    }

    activarRegion(region: string) {
        if (region === this.regionActiva) { return; }

        this.regionActiva = region;
        this.paises = [];

        const observerPais = {
            next: (paises: Country[]) => {
                console.log(paises);
                this.paises = paises;
            },
            error: (err: Error) => {
                this.paises = [];
            }
        }

        this.paisService.buscarRegion(this.regionActiva)
            .subscribe(observerPais);
    }

}
