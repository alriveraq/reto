import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerlibrosPage } from './verlibros.page';


const routes: Routes = [
  {
    path: '',
    component: VerlibrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerlibrosPageRoutingModule {}
