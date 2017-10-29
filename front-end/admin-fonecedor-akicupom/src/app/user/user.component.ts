import { PromocoesService } from '../shared/entities/promocao.service';
import { Component, OnInit } from '@angular/core';
import { Promocao } from '../shared/entities/promocao';

declare var $: any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    buttonlink: string;
}

export const ROUTESUSER: RouteInfo[] = [
    { path: 'cadastro-promocao', title: 'Cadastrar promoção', icon: 'ti-plus', class: '', buttonlink: 'CADASTRAR'},
    { path: 'validar-promocao', title: 'Validar promoções', icon: 'ti-thumb-up', class: '', buttonlink: 'VALIDAR'},
    { path: 'table', title: 'Listas e Relatórios', icon: 'ti-view-list-alt', class: '', buttonlink: 'LISTAR'},
];

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {

    public promocoes: Promocao[] = [];
    public menuItems: any[];

    constructor( private promocoesService: PromocoesService) {}
    ngOnInit() {

        this.promocoesService.getPromocoes()
        .subscribe(data => this.promocoes = data);

        this.menuItems = ROUTESUSER.filter(menuItem => menuItem);
    }

    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }
}
