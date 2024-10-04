import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonApp, IonAvatar,
  IonBackButton,
  IonButton, IonChip,
  IonContent,
  IonHeader,
  IonIcon, IonImg, IonLabel,
  IonTitle,
  IonToolbar,
  ActionSheetController // <--- Importar ActionSheetController
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {closeCircle, pin} from "ionicons/icons";

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.page.html',
  styleUrls: ['./sheet.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonApp, IonBackButton, IonButton, IonChip, IonImg, IonAvatar, IonLabel, NgOptimizedImage]
})
export class SheetPage  {

  constructor(public actionSheetController: ActionSheetController) {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select an Avatar',
      buttons: [
        {
          text: 'Amon',
          icon: 'person-circle-outline',
          handler: () => {
            this.changeAvatar('assets/avatars/avatar01.png');
          }
        },
        {
          text: 'Yushu',
          icon: 'person-circle-outline',
          handler: () => {
            this.changeAvatar('assets/avatars/avatar02.png');
          }
        },
        {
          text: 'Shana',
          icon: 'person-circle-outline',
          handler: () => {
            this.changeAvatar('assets/avatars/avatar03.png');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          icon: 'close-circle-outline'
        }
      ]
    });
    await actionSheet.present();
  }

  changeAvatar(avatarPath: string) {
    const avatarImg = document.getElementById('centralAvatarImage') as HTMLImageElement;
    avatarImg.src = avatarPath;
  }

}
