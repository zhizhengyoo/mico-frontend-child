import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TableComponent } from './compinent/table/table.component';
import { DescComponent } from './compinent/desc/desc.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'desc',
  pathMatch: 'full',
},
// }, {
//   path: 'list',
//   component: TableComponent,
//   data: { title: '列表' },
// },
 {
  path: 'desc',
  component: DescComponent,
  data: { title: '详情' },
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
