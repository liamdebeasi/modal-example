import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('content') content: ElementRef;
  
  ngOnInit() {
    console.log(this.canvas, this.content);
  }
}
