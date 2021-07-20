import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-profile-hotel',
  templateUrl: './profile-hotel.page.html',
  styleUrls: ['./profile-hotel.page.scss'],
})
export class ProfileHotelPage implements OnInit {

  slides: any;
  slideOptions = {
  initialSlide: 0,
  slidesPerView: 1,
  autoplay: true
};


 
@ViewChild('slides', { static: true }) slider: IonSlides;  
  segment = 0;  
  constructor() { }  
  ngOnInit() {
    
  }
  async segmentChanged(ev: any) {  
    await this.slider.slideTo(this.segment);  
  }  
  async slideChanged() {  
    this.segment = await this.slider.getActiveIndex();  
  }  
}
