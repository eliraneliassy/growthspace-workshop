import { Route } from '@angular/router';
import { FeedComponent } from './feed/feed.component';

export const feedRoutes: Route[] = [
  {path: '', pathMatch: 'full', component: FeedComponent}
];
