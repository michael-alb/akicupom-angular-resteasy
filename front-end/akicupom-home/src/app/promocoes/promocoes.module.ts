import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { PromocoesComponent } from './promocoes.component';
import { PromocoesService } from './shared/promocoes.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    PromocoesComponent,
  ],
  exports: [
    PromocoesComponent
  ],
  providers: [
    PromocoesService
  ]
})
export class PromocoesModule { }
