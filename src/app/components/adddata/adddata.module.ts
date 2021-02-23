import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdddataPageRoutingModule } from './adddata-routing.module';

import { AdddataPage } from './adddata.page';
import { InputModule } from '../input/input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputModule,
    HttpClientModule,
    AdddataPageRoutingModule
  ],
  declarations: [AdddataPage]
})
export class AdddataPageModule {}
