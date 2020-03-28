import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { ListaComponent } from './lista/lista.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'listar',
    component: ListaComponent
  },
  {
    path: 'pesquisar',
    component: PesquisaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
