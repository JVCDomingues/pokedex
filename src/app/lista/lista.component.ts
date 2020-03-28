import { Component, OnInit } from '@angular/core';
import { ListagemService } from '../listagem.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.sass']
})
export class ListaComponent implements OnInit {

  lista: any;

  constructor(private listagemService: ListagemService) {
  }
  
  ngOnInit(): void {
  }
  
  listar() {
    this.listagemService.getLista().subscribe(pokemons => this.lista = pokemons)
  }

}
