import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage {
  @ViewChild('canvas') canvas: ElementRef;
  
  constructor() { }

  ionViewDidEnter() {
    console.log(this.canvas.nativeElement.getBoundingClientRect());
  }

}
