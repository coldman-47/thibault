import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonImg,IonCard,IonText,IonCardContent} from '@ionic/angular/standalone';

@Component({
  selector: 'app-restaurantdetail1',
  templateUrl: './restaurantdetail1.page.html',
  styleUrls: ['./restaurantdetail1.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,IonCard,IonImg,IonText,IonCardContent]
})
export class Restaurantdetail1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
