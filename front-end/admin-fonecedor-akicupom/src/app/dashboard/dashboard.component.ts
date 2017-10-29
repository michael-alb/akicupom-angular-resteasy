import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

import { PromocoesService } from '../shared/entities/promocao.service';
import { Promocao } from '../shared/entities/promocao';

//declare var $:any;

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{

    promocoes: Promocao[] [];

    constructor(public promocoesService: PromocoesService) {}

    ngOnInit() {

      this.promocoesService.getPromocoes()
      .subscribe(data => this.promocoes = data);

    }
}
