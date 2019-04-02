import { Component, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('canvas') canvas: ElementRef;
  
  constructor(private modalCtrl: ModalController) {}
  
  ionViewDidEnter() {
    console.log(this.canvas.nativeElement.getBoundingClientRect());
  }
  
  async showModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPage
    });
    
    await modal.present();
  }
}
