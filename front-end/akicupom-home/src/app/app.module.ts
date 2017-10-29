import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { routing } from './app.routing';
import { promocoesRouting } from './promocoes/promocoes.routing';
import { PromocoesModule } from './promocoes/promocoes.module';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { MenuCategoriaComponent } from './menu-categoria/menu-categoria.component';
import { TermosDeUsoComponent } from './termos-de-uso/termos-de-uso.component';
import { ComoUsarCupomComponent } from './como-usar-cupom/como-usar-cupom.component';
import { PerguntasFrequentesComponent } from './perguntas-frequentes/perguntas-frequentes.component';
import { PromocoesService } from 'app/promocoes/shared/promocoes.service';
import { CategoriaService } from './menu-categoria/shared/categoria.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    NotFoundComponent,
    MainFooterComponent,
    LoginUsuarioComponent,
    MenuCategoriaComponent,
    TermosDeUsoComponent,
    ComoUsarCupomComponent,
    PerguntasFrequentesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    PromocoesModule,
    promocoesRouting,
    routing
  ],
  providers: [PromocoesService, CategoriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
