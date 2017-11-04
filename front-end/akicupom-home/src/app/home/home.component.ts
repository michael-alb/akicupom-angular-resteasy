import { Component, OnInit } from '@angular/core';

import { PromocoesService } from '../promocoes/shared/promocoes.service';
import { Promocao } from '../promocoes/shared/promocao';
import { CategoriaService } from '../menu-categoria/shared/categoria.service';
import { Categoria } from '../menu-categoria/shared/Categoria';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public promocoes: Promocao[] = [];
  public categoria: any;
  public coverpromo: string;

  constructor(public promocoesService: PromocoesService,
              public categoriaService: CategoriaService) {
    this.coverpromo = 'src/assets/capa-promo.jpg';
   }

  ngOnInit() {
    this.promocoesService.getPromocoes()
      .subscribe(data => this.promocoes = data);

    this.categoriaService.getCategorias()
      .subscribe(data => this.categoria = data);
  }

}
