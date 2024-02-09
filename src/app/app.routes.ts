import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import HomeComponent from '@pages/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { Page404Component } from '@pages/page404/page404.component';

export const routes: Routes = [
    {
        path:'',
        component: LayoutComponent,
        children:[ //vistas anidadas
            {
                path: '',
                loadComponent: () => import('@pages/home/home.component')//agregando el default a la clase del componente
                //loadComponent: () => import('@products/pages/list/list.component').then(m=>m.ListComponent) //promesa para exportar componente
            },
            {
                path: 'about',
                loadComponent: () => import('@pages/about/about.component').then(m=>m.AboutComponent)//promesa
                //component: AboutComponent
            },
            {
                path: 'contact',
                loadComponent: () => import('@pages/contact/contact.component').then(m=>m.ContactComponent)//promesa
                //component: AboutComponent
            },
           
        ]
    },
    {
        path: '**',
        component: Page404Component
    }
];
