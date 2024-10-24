import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButton ,IonCol,IonGrid,IonText,IonRow  } from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule ,IonButton ,IonCol,IonGrid,IonText,IonRow] ,
  schemas: [CUSTOM_ELEMENTS_SCHEMA] ,
})
export class RestaurantPage implements OnInit {
[x: string]: any;
  
    RestaurantOnSale = [
      {
        title: 'Le Malabar Brasserie',
        img: 'https://a.mktgcdn.com/p/30sNtv09F8yrHk4_guhw8geSPuXJZIQ7rPCdWEQlL-k/3000x2250.jpg',
        price: 18,
        description: '',
        
      },
      {
        title: 'Pedzouille La Grange',
        img: 'https://www.ahstatic.com/photos/a7l6_rsr003_00_p_2048x1536.jpg',
        price: 18,
        description: '',
        
      },
      {
        title: 'Les Deux Magots',
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/e8/61/b6/caption.jpg',
        price: 18,
        description: '',
        
      },
      {
        title: 'Colère',
        img:'https://th.bing.com/th/id/R.021cfdae38cee0f6d2bdb3428fd7b6b9?rik=Bzjt3oB7%2bHDE2Q&pid=ImgRaw&r=0.jpg' ,
        price: 18,
        description: '',
      },
      {
        title: 'New Soul Food',
        img:'https://th.bing.com/th/id/R.5eb3718e12f39045aec8dbd46bc86df1?rik=E1qkHiMTk8C5YQ&pid=ImgRaw&r=0.jpg' ,
        price: 18,
        description: '',
      },
      {
        title: 'Bangkok',
        img:'https://th.bing.com/th/id/OIP.De3COyLmvSPy0oKMhhTRGgHaE8?rs=1&pid=ImgDetMain.jpg' ,
        price: 18,
        description: '',
      } 
      
    ];
  

  constructor() { }

  ngOnInit() {
  }

}
