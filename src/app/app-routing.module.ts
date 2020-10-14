import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './compinent/table/table.component';
import { DescComponent } from './compinent/desc/desc.component';


const routes: Routes = [{
  path: '',
  redirectTo: 'list',
  pathMatch: 'full',
  // children: [
  //   {
  //     path: 'document-set',
  //     loadChildren: './document-set/docyment-set.module#DocumentSetModule',
  //     data: {
  //       title: '片语组套维护',
  //     },
  //   },
  // ],
}, {
  path: 'list',
  component: TableComponent,
  data: { title: '列表' },
}, {
  path: 'desc',
  component: DescComponent,
  data: { title: '详情' },
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
