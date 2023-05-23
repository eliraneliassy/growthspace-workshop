import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { akitaDevtools } from '@datorama/akita';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));



akitaDevtools();
