import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../menu-categoria/shared/categoria.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  categorias: any;
  
    constructor(private categoriaService: CategoriaService) { }
  
    ngOnInit() {
      this.getCategorias();
    }
  
  
    getCategorias() {
      return this.categoriaService.getCategorias().subscribe(categorias => this.categorias = categorias);
    }
  
  }
