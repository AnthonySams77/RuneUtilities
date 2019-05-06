import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BHShopPage } from './bhshop.page';
//import { NgPrimeComponentsModule } from '../ngprime-components.module';

const routes: Routes = [
  {
    path: '',
    component: BHShopPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
    //NgPrimeComponentsModule
  ],
  declarations: [BHShopPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BHShopPageModule {}
