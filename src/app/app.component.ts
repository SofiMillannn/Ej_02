import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {americanFootball, card, grid, logoAppleAppstore} from "ionicons/icons";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() { addIcons({grid, card});}

}
