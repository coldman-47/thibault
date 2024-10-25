import { CommonModule, JsonPipe } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  OnInit,
} from '@angular/core';
import {
  IonCol,IonContent,IonGrid,IonRow,IonText,IonTitle,IonImg,IonCard,IonCardTitle,IonIcon
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.html'],
  standalone: true,
  imports: [IonCardTitle,IonCard,IonImg,IonRow,IonContent,IonText,IonGrid,IonCol,IonRow,IonContent,IonTitle,CommonModule,JsonPipe,IonCard,IonIcon],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DetailsPage implements OnInit {
  @Input() restaurant: any;

  constructor() {}

  ngOnInit() {}
}
