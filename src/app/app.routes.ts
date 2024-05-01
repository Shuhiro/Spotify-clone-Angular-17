import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
        /*Para componente standalone*/
        /* loadComponent:()=> import('./shared/components/header-user/header-user.component').then((c)=> c.HeaderUserComponent) */
    }
];
