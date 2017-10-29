import { Routes, CanActivate } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { TableComponent } from './table/table.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { LoginComponent } from './login/login.component';
import { CadastroPromocaoComponent } from './user/cadastro-promocao/cadastro-promocao.component';

import { AuthGuard } from './guards/auth.guard';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'user',
        component: UserComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'user/table',
        component: TableComponent
    },
    // {
    //    path: 'typography',
    //    component: TypographyComponent
    // },
    // {
    //    path: 'icons',
    //    component: IconsComponent
    // },
    {
        path: 'user/cadastro-promocao',
        component: CadastroPromocaoComponent
    },
    /*{
        path: 'maps',
        component: MapsComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    },
    {
        path: 'upgrade',
        component: UpgradeComponent
    }*/
]
