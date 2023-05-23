import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'feed',
        pathMatch: 'full'
    },
    {
        path: 'feed',
        loadChildren: () => import('@growthspace/feed').then(m => m.FeedModule)
    },
    {
        path: 'cart',
        loadChildren: () => import('@growthspace/cart').then(m => m.CartModule)
    }
];
