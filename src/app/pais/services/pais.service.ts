import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
    providedIn: 'root'
})
export class PaisService {
    private apiUrl: string = 'https://restcountries.com/v3.1';

    get httpParams() {
        return new HttpParams().set('fields', 'name,capital,flags,popultation,ccn3,cca2,translations');
    }

    constructor(private http: HttpClient) { }

    buscarPais(pais: string): Observable<Country[]> {
        const url = `${this.apiUrl}/name/${pais}`;
        return this.http.get<Country[]>(url);
    }

    buscarCapital(capital: string): Observable<Country[]> {
        const url = `${this.apiUrl}/capital/${capital}`;
        return this.http.get<Country[]>(url, {params: this.httpParams});
    }

    buscarRegion(region: string): Observable<Country[]> {
        const url = `${this.apiUrl}/region/${region}`;
        return this.http.get<Country[]>(url, {params: this.httpParams});
    }

    getPaisPorCodigo(codigo: string): Observable<Country[]> {
        const url = `${this.apiUrl}/alpha/${codigo}`;
        return this.http.get<Country[]>(url, {params: this.httpParams});
    }

}
