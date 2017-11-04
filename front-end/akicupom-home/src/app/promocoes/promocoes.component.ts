import { Component, OnInit } from '@angular/core';

import { Categoria } from './../menu-categoria/shared/Categoria';
import {PromocoesService} from './shared/promocoes.service';
import {Promocao} from './shared/promocao';
import { CategoriaService } from '../menu-categoria/shared/categoria.service';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.css']
})
export class PromocoesComponent implements OnInit {

  public promocoes: Promocao[] = [];
  public categoria: any;

  constructor(public promocoesService: PromocoesService,
              public categoriaService: CategoriaService) { }

  ngOnInit() {
    this.promocoesService.getPromocoes()
      .subscribe(data => this.promocoes = data);

      this.categoriaService.getCategorias()
      .subscribe(data => this.categoria = data);
  } 
}
