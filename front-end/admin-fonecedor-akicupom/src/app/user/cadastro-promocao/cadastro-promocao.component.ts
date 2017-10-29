import { Http, Response } from '@angular/http';
import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Promocao } from '../../shared/entities/promocao';
import { PromocoesService } from '../../shared/entities/promocao.service';

import { BasicValidators } from '../../shared/validators/basic-validators';

@Component({
  selector: 'app-cadastro-promocao',
  templateUrl: './cadastro-promocao.component.html'
})


export class CadastroPromocaoComponent implements OnInit {

  promocao: Promocao = new Promocao();
  form: FormGroup;

  constructor(private http: Http,
    private router: Router,
    private formBuilder: FormBuilder,
    private promocoesService : PromocoesService
  ) {

  this.form = formBuilder.group({
    nome: [],
    descricao: [],
    valor_promocao: [],
    dataValidade: [],
    capa: [],
    status: [],
    categoria: [],
    fornecedor: []
    });
  }

  ngOnInit() {
  }  

  save() {
    var result;
    const promoValue = this.form.value;
    // this.promocoesService.addPromocao(promoValue);

    if (this.promocao.id) {
      result = this.promocoesService.updatePromocao(promoValue);
    } else {
      result = this.promocoesService.addPromocao(promoValue);
    }

    result.subscribe(data => this.router.navigate(['users']));

  }

}