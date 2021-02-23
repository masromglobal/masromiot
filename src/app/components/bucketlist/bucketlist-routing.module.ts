import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BucketlistPage } from './bucketlist.page';

const routes: Routes = [
  {
    path: '',
    component: BucketlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BucketlistPageRoutingModule {}
