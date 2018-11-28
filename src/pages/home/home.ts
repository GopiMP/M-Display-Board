import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {IonMarqueeModule} from "ionic-marquee";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  size = 16;
  scrollAmount = 1;
  horizontalText = `this is the text `;

  //directionScroll = "right"
  
  direction: string;
  constructor(public navCtrl: NavController) {

  }
  ngOnInit() {
    setTimeout(() => {
      this.horizontalText = `this is the text to show that text could be refreshed. 
      but this feature support horizontal scroll only!`;
    }, 5000);
  }

  increaseSize(){
    console.log(' + Pressed');
  }
  increaseSpeed(){
    console.log("Increase speed")
    this.scrollAmount = 5;
  }

}
