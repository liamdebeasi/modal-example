import { Component, ElementRef, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage {
  @ViewChild('canvas') canvas: ElementRef;
  
  constructor(
    private modalCtrl: ModalController
  ) { }

  ionViewDidEnter() {
    console.log(this.canvas.nativeElement.getBoundingClientRect());
  }
  
  dismiss() {
    this.modalCtrl.dismiss();
  }

}
