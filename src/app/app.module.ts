import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA, DoBootstrap } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './compinent/table/table.component';
import { DescComponent } from './compinent/desc/desc.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { createCustomElement } from '@angular/elements';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DescComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  // entryComponents: [
  //   TableComponent,
  // ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('app2-element', customElement);
    const customElement2 = createCustomElement(TableComponent, { injector: this.injector });
    customElements.define('table-element', customElement2);
  }

  ngDoBootstrap() {
  }
}
