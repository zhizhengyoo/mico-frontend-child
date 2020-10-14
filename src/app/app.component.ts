import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { TableComponent } from './compinent/table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app2';
  constructor(private injector: Injector) {
  }

//   ngDoBootstrap() {
//     const customElement = createCustomElement(TableComponent, { injector: this.injector });
//     customElements.define('table-element', customElement);
// }
}
