import { Component, OnInit, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-desc',
  templateUrl: './desc.component.html',
  styleUrls: ['./desc.component.scss']
})
export class DescComponent {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const customElement = createCustomElement(TableComponent, { injector: this.injector });
    customElements.define('table-element', customElement);
}
  // constructor() { }

  // ngOnInit(): void {
  // }

}
