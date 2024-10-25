import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCol, IonGrid, IonRow, IonText, IonButtons, IonSearchbar, IonIcon, IonButton, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonItem, IonLabel, IonList, IonFooter, IonTabButton, IonTabBar, IonImg } from '@ionic/angular/standalone';
import { DetailBateauPage } from './detail-bateau/detail-bateau.page';


@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
  standalone: true,
  imports: [IonImg, IonTabBar, IonTabButton, IonFooter, IonList, IonLabel, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonIcon, IonSearchbar, IonButtons, IonText, IonRow, IonGrid, IonCol, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,DetailBateauPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BateauxPage implements OnInit{
  @ViewChild('modal') modal: any;
  selectedbateaux?: any;

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
  ];
  BateauxOn= [
    {
      name: 'Brise de mer ',
      description: 'BRISE DE MER 34 Une Légende des Voiliers Aluminium en FORME.  Numéro 3 de la Série. Remis à NIVEAU régulièrement depuis 2002 et PRET à REPARTIR. Bateau COMPLET pour AMATEURS de Grand Voyage sur Voilier de 10 mètres. A DEJA fait un Tour du Monde au Début de sa CARRIERE et il a BIEN Vieillit. SPI + AIS +3 winchs self-tailings + 4 Panneaux solaires + Eaux noires. GV de 2015 + Capote de 2015. Bimini 2017. Moteur 27 cv de 2016. Survie + Balise de 2018. Génois de 2019. Gréement DORMANT 2023. A Connu la Grèce, Sardaigne et Sicile en été 2023.  Place de port Possible.',
      img: 'https://www.hervemarine.com/wp-content/uploads/2023/09/2-4.jpg',
      price: '1975   13.20',
    }
    ,

    {
      name: 'Saphir',
      description:'Un bateau panoramique & spacieux. Son allure contemporaine et moderne procure une atmosphère à la fois élégante et conviviale. 120 personnes en dîner assis.',
      img: 'https://www.superyachtfan.com/wp-content/uploads/2020/12/yacht-Sapphire-12.webp',
      price:'1976  22.50',   
    },

  {
    name: 'Gast micher',
    description: 'Mauris efficitur ante vitae diam sagittis faucibus...',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT19edSWmqRZEaOcpnX7BxdOgCEVUPQaCfv3g&s',
    price:'1975      13.20',  
  },



    {
    name: 'Aquilon',
    description: 'Mauris efficitur ante vitae diam sagittis faucibus...',
    img: 'https://www.hervemarine.com/wp-content/uploads/2023/09/2-4.jpg',
    price:'1975      13.20',    
  }
];



  constructor() { }

  ngOnInit() {
  }
  showDetails(bateaux: any){
    this.selectedbateaux=bateaux;
    this.modal.nativeElement.present();
  }

}
