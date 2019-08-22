import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopupMenuComponent } from '../popup-menu/popup-menu.component';

@Component({
  selector: 'myads',
  templateUrl: './myads.page.html',
  styleUrls: ['./myads.page.scss'],
})
export class MyadsPage  {
  segment = 'ads';
  constructor(public popoverCtrl: PopoverController) { }

  async presentPopover(ev: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopupMenuComponent ,
      event: ev,
      translucent: true
    });
    await popover.present();
  }
}
