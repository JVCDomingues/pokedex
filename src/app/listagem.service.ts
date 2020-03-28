import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListagemService {

  api = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getLista() {
    return this.http.get(this.api)
  }
}
