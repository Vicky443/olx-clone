import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'popup-menu',
  template: `
    <ion-list lines="none">
      <ion-item button>
        <ion-label> <strong> EDIT  </strong> </ion-label>
      </ion-item>
      <ion-item button>
        <ion-label> <strong> DEACTIVATE  </strong></ion-label>
      </ion-item>
      <ion-item button>
        <ion-label>  <strong> DELETE  </strong> </ion-label>
      </ion-item>
      <ion-item button>
        <ion-label>   <strong> MARK AS SOLD  </strong> </ion-label>
      </ion-item>
    </ion-list>
  `
})
export class PopupMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
