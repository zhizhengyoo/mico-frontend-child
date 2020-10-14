import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { PlanetPortalApplication, PlanetRouterEvent, GlobalEventDispatcher, defineApplication } from '@worktile/planet';

if (environment.production) {
  enableProdMode();
}

// defineApplication('app2', (portalApp: PlanetPortalApplication) => {
//   return platformBrowserDynamic([
//       {
//           provide: PlanetPortalApplication,
//           useValue: portalApp
//       }
//   ])
//       .bootstrapModule(AppModule)
//       .then(appModule => {
//           return appModule;
//       })
//       .catch(error => {
//           console.error(error);
//           return null;
//       });
// });

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
