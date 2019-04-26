import { Component } from '@angular/core';

import { Vibration } from '@ionic-native/vibration/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [Vibration]
})
export class Tab1Page {
  constructor(private vibration: Vibration) {

  }

  vibrateDevice() {
    console.log("in vibrateDevice...");
    this.vibration.vibrate(5000);
  }

  stopVibration() {
    this.vibration.vibrate(0);
  }
}
