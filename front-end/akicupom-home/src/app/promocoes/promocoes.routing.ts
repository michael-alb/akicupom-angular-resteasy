import { Routes, RouterModule } from '@angular/router';

import { PromocoesComponent } from './promocoes.component';

const promocoesRoutes: Routes = [
  { path: 'promocoes', component: PromocoesComponent, pathMatch: 'full' }
];

export const promocoesRouting = RouterModule.forChild(promocoesRoutes);
