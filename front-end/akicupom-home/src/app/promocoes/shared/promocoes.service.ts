import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PromocoesService {

    private urlServico: string = 'http://localhost:8080/akicupom-web/rest/akicupom/promocao/';

    constructor(private http: Http) {

    }

    getpromocao(id) {
        return this.http.get(this.urlServico + id).map(res => res.json());
    }

    getPromocoes() {
        return this.http.get(this.urlServico + 'listar').map(res => res.json());
    }

    deletePromocao(id) {
        let url = this.urlServico + 'delete/' + id;
        return this.http.delete(url).map(res => res.text());
    }

    addPromocao(promocao) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let body = JSON.stringify(promocao);
        return this.http.post(this.urlServico, body).map(res => res.text());
    }

    updatePromocao(promocao) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let body = JSON.stringify(promocao);
        return this.http.put(this.urlServico, body).map(res => res.text());
    }
}
