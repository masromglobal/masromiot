import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AdminloginPageRoutingModule } from './adminlogin-routing.module';

import { AdminloginPage } from './adminlogin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminloginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    AdminloginPageRoutingModule
  ],
  declarations: [AdminloginPage]
})
export class AdminloginPageModule {}
