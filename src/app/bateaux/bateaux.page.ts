import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCol, IonGrid, IonRow, IonText, IonButtons, IonSearchbar, IonIcon, IonButton, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonItem, IonLabel, IonList, IonFooter, IonTabButton, IonTabBar, IonImg } from '@ionic/angular/standalone';
import { register } from 'swiper/element';
register();
@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
  standalone: true,
  imports: [IonImg, IonTabBar, IonTabButton, IonFooter, IonList, IonLabel, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonIcon, IonSearchbar, IonButtons, IonText, IonRow, IonGrid, IonCol, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BateauxPage implements OnInit{
  [x: string]: any;
  BateauxOnSale = [
    {
      name: 'Brise de mer ',
      description: '1975      13.20',
      img: 'https://www.hervemarine.com/wp-content/uploads/2023/09/2-4.jpg',
      price: '',
    }
    ,

    {
      name: 'Saphir',
      description: '1976  22.50',
      img: 'https://www.superyachtfan.com/wp-content/uploads/2020/12/yacht-Sapphire-12.webp',
      price:'',   
    },

  {
    name: 'Gast micher',
    description: 'Mauris efficitur ante vitae diam sagittis faucibus...',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT19edSWmqRZEaOcpnX7BxdOgCEVUPQaCfv3g&s',
    price:'',  
  },


    {
    name: 'Aquilon',
    description: 'Mauris efficitur ante vitae diam sagittis faucibus...',
    img: 'https://www.hervemarine.com/wp-content/uploads/2023/09/2-4.jpg',
    price:'',    
  }
];



  constructor() { }

  ngOnInit() {
  }

}
