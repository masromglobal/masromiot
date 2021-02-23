import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmincompanylistPageRoutingModule } from './admincompanylist-routing.module';

import { AdmincompanylistPage } from './admincompanylist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmincompanylistPageRoutingModule
  ],
  declarations: [AdmincompanylistPage]
})
export class AdmincompanylistPageModule {}
