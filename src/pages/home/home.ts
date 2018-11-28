import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  OpenPage(id) {
    switch (id) {
      case 1:
        this.navCtrl.push('VariabilityPage');
        break;
      case 2:
        this.navCtrl.push('PressurePage');
        break;
      case 3:
        this.navCtrl.push('PulsePage');
        break;
      case 4:
        this.navCtrl.push('AveragePulsePage');
        break;
      case 5:
        this.navCtrl.push('SmallPulsePage');
        break;
      case 6:
        this.navCtrl.push('HighPulsePage');
        break;
    }
  }
}
