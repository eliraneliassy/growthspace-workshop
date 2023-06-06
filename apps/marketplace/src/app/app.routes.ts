import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'feed',
        pathMatch: 'full'
    },
    {
        path: 'feed',
        loadComponent: () => import('@growthspace/feed').then(m => m.FeedComponent)
    },
    {
        path: 'cart',
      loadComponent: () => import('@growthspace/cart').then(m => m.CartComponent)
    }
];
