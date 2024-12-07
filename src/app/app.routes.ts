import { Routes } from '@angular/router';


export const routes: Routes = [
    { path: '', redirectTo: '/articles', pathMatch: 'full' },
    {
        path: 'articles',
        loadComponent: () =>
            import('./features/articles/articles.component').then(
                (m) => m.ArticlesComponent
            ),
    },


    { path: '**', redirectTo: '/articles' },
];
