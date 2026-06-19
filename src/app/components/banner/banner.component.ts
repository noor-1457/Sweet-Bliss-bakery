import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonicSlides, IonRow } from '@ionic/angular/standalone';
import { Input } from '@angular/core';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  imports: [IonRow],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
})
export class BannerComponent  implements OnInit {
swiperModules = [IonicSlides]

@Input()

bannerImages?: any[] = [
  // {id: 1 , banner: 'assets/banner1.avif' , active: true},
  {id: 2 , banner: 'assets/banner2.jpg' , active: false},
  {id: 3 , banner: 'assets/banner3.jpg' , active: false},
  {id: 4 , banner: 'assets/banner4.png' , active: false},
  {id: 5 , banner: 'assets/banner5.jpg' , active: false}
]

  constructor() { }

  ngOnInit() {}

}
