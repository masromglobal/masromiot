import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmincompanylistPage } from './admincompanylist.page';

const routes: Routes = [
  {
    path: '',
    component: AdmincompanylistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmincompanylistPageRoutingModule {}
