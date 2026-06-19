import { Component, input, OnInit } from '@angular/core';
import { IonButton, IonItemDivider } from '@ionic/angular/standalone';

@Component({
  selector: 'app-list-heading',
  templateUrl: './list-heading.component.html',
  styleUrls: ['./list-heading.component.css'],
  imports: [IonItemDivider, IonButton]
})
export class ListHeadingComponent  implements OnInit {

heading = input<string>('');
buttonTitle = input<string>('See All');

  constructor() { }

  ngOnInit() {}

}
