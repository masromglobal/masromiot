import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BucketlistPageRoutingModule } from './bucketlist-routing.module';

import { BucketlistPage } from './bucketlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BucketlistPageRoutingModule
  ],
  declarations: [BucketlistPage]
})
export class BucketlistPageModule {}
