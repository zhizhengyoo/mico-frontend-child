import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { App2Module } from './app/app.module';
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
//       .bootstrapModule(App2Module)
//       .then(App2Module => {
//           return App2Module;
//       })
//       .catch(error => {
//           console.error(error);
//           return null;
//       });
// });

platformBrowserDynamic().bootstrapModule(App2Module)
  .catch(err => console.error(err));
