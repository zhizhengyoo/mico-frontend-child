import { Component, Injector } from '@angular/core';

@Component({
  selector: 'app2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class App2Component {
  title = 'app2';
  constructor() {
  }

//   ngDoBootstrap() {
//     const customElement = createCustomElement(TableComponent, { injector: this.injector });
//     customElements.define('table-element', customElement);
// }
}
