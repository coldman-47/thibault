import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonNav,IonCard,IonCardHeader,IonCardContent,IonCardSubtitle,IonCardTitle,IonImg} from '@ionic/angular/standalone';

@Component({
  selector: 'app-contacte',
  templateUrl: './contacte.page.html',
  styleUrls: ['./contacte.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonNav,IonCard,IonCardHeader,IonCardSubtitle,IonCardTitle,IonImg,IonCardContent],
})
export class ContactePage implements OnInit {
onSubmit() {
throw new Error('Method not implemented.');
}
onWillPresent() {
throw new Error('Method not implemented.');
}

  constructor() { }

  ngOnInit() {
  }

}
