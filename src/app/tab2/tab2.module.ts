import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

//import { MatCardModule } from '@angular/material';

import { DemoMaterialModule } from '../../material-module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }]),
    DemoMaterialModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
