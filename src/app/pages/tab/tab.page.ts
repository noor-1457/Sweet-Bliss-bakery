import { Component, OnInit } from '@angular/core';
import { IonTabBar, IonTabs, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { home, person, settings, cart, search } from 'ionicons/icons';
import { addIcons} from 'ionicons';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.css'],
  standalone: true,
  imports: [IonTabBar, IonTabs, IonTabButton, IonIcon, IonLabel]
})
export class TabPage implements OnInit {

  constructor() {
    addIcons({
      home,
      person,
      settings,
      cart, search
    });
  }

  ngOnInit() {
  }

}
