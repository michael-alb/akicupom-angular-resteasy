import { PerguntasFrequentesComponent } from './perguntas-frequentes/perguntas-frequentes.component';
import { ComoUsarCupomComponent } from './como-usar-cupom/como-usar-cupom.component';
import { TermosDeUsoComponent } from './termos-de-uso/termos-de-uso.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { PromocoesComponent } from './promocoes/promocoes.component';
import { HomeComponent } from './home/home.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'login-usuario', component: LoginUsuarioComponent},
  { path: 'termos-de-uso', component: TermosDeUsoComponent},
  { path: 'como-usar-cupom', component: ComoUsarCupomComponent},
  { path: 'perguntas-frequentes', component: PerguntasFrequentesComponent},
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
