import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonAvatar,
  IonList,
  IonCard,
  IonCardContent,
  IonLabel,
  IonAlert,
  IonButton
} from '@ionic/angular/standalone';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonList, IonCard, IonCardContent, IonLabel, NgOptimizedImage, IonAlert, IonButton],
})
export class HomePage {
  constructor(private router: Router) { }

  alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    },
    {
      text: 'Continuar',

      handler: () => {
        console.log('Continue clicked');
        this.router.navigate(['sheet']);
      }
    }
  ];
}
