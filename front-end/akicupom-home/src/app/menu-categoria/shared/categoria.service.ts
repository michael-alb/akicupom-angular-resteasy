import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CategoriaService {

  private urlGetCategorias: string = 'http://localhost:8080/akicupom-web/rest/akicupom/categoria/';

  constructor(private http: Http) { }

  getCategorias(): Observable<Response> {
    return this.http.get(this.urlGetCategorias + 'listar').map(res => res.json());
  }

}
