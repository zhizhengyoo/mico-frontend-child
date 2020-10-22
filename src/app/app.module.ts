import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { App2Component } from './app.component';
// import { TableComponent } from './compinent/table/table.component';
import { DescComponent } from './compinent/desc/desc.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';

@NgModule({
  declarations: [
    App2Component,
    // TableComponent,
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
  exports: [
    // TableComponent,
    DescComponent,
    App2Component,
  ],
  bootstrap: [App2Component]
})
export class App2Module {
  constructor() {
    // const customElement = createCustomElement(App2Component, { injector: this.injector });
    // customElements.define('app2-element', customElement);
    // const customElement2 = createCustomElement(TableComponent, { injector: this.injector });
    // customElements.define('table-element', customElement2);
  }
}
