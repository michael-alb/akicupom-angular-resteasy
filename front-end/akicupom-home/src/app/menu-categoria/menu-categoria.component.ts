import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './shared/categoria.service';


import { Categoria } from './shared/Categoria';

@Component({
  selector: 'app-menu-categoria',
  templateUrl: './menu-categoria.component.html',
  styleUrls: ['./menu-categoria.component.css'],
  providers: [CategoriaService]
})
export class MenuCategoriaComponent implements OnInit {

  categorias: any;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.getCategorias();
  }


  getCategorias() {
    return this.categoriaService.getCategorias().subscribe(categorias => this.categorias = categorias);
  }

}
