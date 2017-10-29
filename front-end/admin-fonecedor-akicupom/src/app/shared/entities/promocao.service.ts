import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PromocoesService {

  private url: string = 'http://localhost:8080/akicupom-web/rest/akicupom/promocao/';

  constructor(private http: Http) { }

  getPromocoes() {
    return this.http.get(this.url + 'listar')
    .map(res => res.json());
  }

  getPromocao(id){
    return this.http.get(this.getPromocaoUrl(id))
      .map(res => res.json());
  }

  addPromocao(promocao) {
    alert('Promoção Adicionada!');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let body = JSON.stringify(promocao);
    return this.http.post(this.url + 'novo/'
    + promocao.nome + '/'
    + promocao.descricao + '/'
    + promocao.valor_promocao + '/'
    + promocao.dataValidade + '/'
    + promocao.capa + '/'
    + promocao.status + '/'
    + promocao.categoria + '/'
    + promocao.fornecedor, body)
    .map(res => res)
    .subscribe(dados => console.log(dados));
  }

  updatePromocao(promocao) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let body = JSON.stringify(promocao);
    return this.http.put(this.url + 'novo/' + promocao.nome + '/' + promocao.descricao + '/' + promocao.dataValidade, body)
    .map(res => res.json());
  }

  deletePromocao(id) {
    return this.http.delete(this.url + 'remover/' + id)
    .map(res => res.json());
  }

  private getPromocaoUrl(id){
    return this.url + '/' + id;
  }
}