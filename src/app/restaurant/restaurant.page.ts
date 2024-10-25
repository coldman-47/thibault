import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCol, IonGrid, IonText, IonRow } from '@ionic/angular/standalone';
import { DetailsPage } from './details/details.page';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonCol, IonGrid, IonText, IonRow,DetailsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RestaurantPage implements OnInit {
  @ViewChild('modal') modal: any;
  selectedrestaurant?: any;

  restaurantOnSale: any[] = [];

  [x: string]: any;

  RestaurantOnSale = [
    {
      title: 'Le Malabar Brasserie',
      img: 'https://a.mktgcdn.com/p/30sNtv09F8yrHk4_guhw8geSPuXJZIQ7rPCdWEQlL-k/3000x2250.jpg',
      price: 18,
      description: 'situé au 75007  vous accueille dans une , situé au 75007  vous accueille dans une ambiance chaleureuse et conviviale. Ouvert tous les jours de 9h à minuit, cet établissement est l\'endroit idéal pour savourer une cuisine de qualité à toute heure de la journée. Pour toute réservation ou information, n\'hésitez pas à joindre l\'équipe du restaurant au 0602877928. Le propriétaire, Max veille à offrir à chaque client une expérience gastronomique exceptionnelle.',

    },
    {
      title: 'Pedzouille La Grange',
      img: 'https://www.ahstatic.com/photos/a7l6_rsr003_00_p_2048x1536.jpg',
      price: 18,
      description: 'un havre de paix culinaire situé au cœur de la campagne française. Notre restaurant est un hommage aux traditions gastronomiques françaises, où chaque plat est préparé avec soin et passion, en utilisant des ingrédients locaux de saison',

    },
    {
      title: 'Les Deux Magots',
      img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/e8/61/b6/caption.jpg',
      price: 18,
      description: '',

    },
    {
      title: 'Colère',
      img: 'https://th.bing.com/th/id/R.021cfdae38cee0f6d2bdb3428fd7b6b9?rik=Bzjt3oB7%2bHDE2Q&pid=ImgRaw&r=0.jpg',
      price: 18,
      description: '',
    },
    {
      title: 'New Soul Food',
      img: 'https://th.bing.com/th/id/R.5eb3718e12f39045aec8dbd46bc86df1?rik=E1qkHiMTk8C5YQ&pid=ImgRaw&r=0.jpg',
      price: 18,
      description: '',
    },
    {
      title: 'Bangkok',
      img: 'https://th.bing.com/th/id/OIP.De3COyLmvSPy0oKMhhTRGgHaE8?rs=1&pid=ImgDetMain.jpg',
      price: 18,
      description: '',
    }

  ];


  constructor() { }


  ngOnInit() {
  }

  showDetails(restaurant: any) {
    this.selectedrestaurant = restaurant;
    this.modal.nativeElement.present();
  }
}
