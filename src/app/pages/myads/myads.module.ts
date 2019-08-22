import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyadsPage } from './myads.page';
import { PopupMenuComponent } from '../popup-menu/popup-menu.component';

const routes: Routes = [
  {
    path: '',
    component: MyadsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyadsPage, PopupMenuComponent],
  entryComponents: [ PopupMenuComponent ]
})
export class MyadsPageModule {}
