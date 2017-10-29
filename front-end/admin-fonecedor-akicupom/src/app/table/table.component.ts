import { Component, OnInit } from '@angular/core';

import {PromocoesService} from '../shared/entities/promocao.service';
import { Promocao } from '../shared/entities/promocao';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit {
    public promocoes: Promocao[] = [];
    public promocao: Promocao;

    constructor(public promocoesService: PromocoesService) {}

    ngOnInit() {
        this.promocoesService.getPromocoes()
        .subscribe(data => this.promocoes = data);
    }
    deletePromocao(promocao) {
        if (confirm('Tem certeza que deseja remover o cupom ?')) {
          const index = this.promocoes.indexOf(promocao);
          this.promocoes.splice(index, 1);
    
          this.promocoesService.deletePromocao(promocao.id)
            // .subscribe(null,
            //   err => {
            //     alert('Vocẽ não pode deletar esse cupom!.');
            //     // Revert the view back to its original state
            //     this.promocoes.splice(index, 0, promocao);
            //   });
        }
      }
    
}
