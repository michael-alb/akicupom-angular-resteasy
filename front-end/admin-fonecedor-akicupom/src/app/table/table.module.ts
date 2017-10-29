
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { PromocoesService } from './../shared/entities/promocao.service';
import { Promocao } from '../shared/entities/promocao';
import { TableComponent } from './table.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    TableComponent
  ],
  exports: [
    TableComponent
  ],
  providers: [
    PromocoesService
  ]
})
export class TableModule { }
