import { Component, OnInit } from '@angular/core';
import {PromocoesService} from './shared/promocoes.service';
import {Promocao} from './shared/promocao';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.css']
})
export class PromocoesComponent implements OnInit {

  public promocoes: Promocao[] = [];

  constructor(public promocoesService: PromocoesService) { }

  ngOnInit() {
    this.promocoesService.getPromocoes()
      .subscribe(data => this.promocoes = data);
  }

  deletePromocao(promocao) {
    if (confirm('Tem certeza que deseja remover o cupom ?')) {
      var index = this.promocoes.indexOf(promocao);
      this.promocoes.splice(index, 1);

      this.promocoesService.deletePromocao(promocao.id)
        .subscribe(null,
          err => {
            alert('Vocẽ não pode deletar esse cupom!.');
            // Revert the view back to its original state
            this.promocoes.splice(index, 0, promocao);
          });
    }
  }

}
