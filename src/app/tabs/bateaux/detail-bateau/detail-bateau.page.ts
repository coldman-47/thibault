import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonGrid, IonCol, IonImg, IonCard, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';



@Component({
  selector: 'app-detail-bateau',
  templateUrl: './detail-bateau.page.html',
  styleUrls: ['./detail-bateau.page.scss'],
  standalone: true,
  imports: [IonCardTitle, IonCardHeader, IonCard, IonImg, IonCol, IonGrid, IonRow, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class DetailBateauPage implements OnInit {

  @Input() bateaux: any;

  constructor() { }

  ngOnInit() {
  }

}
