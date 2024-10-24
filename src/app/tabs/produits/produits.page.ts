import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';
import { RouterModule } from '@angular/router';
import { ProduitsListPage } from '../produits-list/produits-list.page';

register();

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProduitsPage implements OnInit {
  productsOnSale = [
    {
      title: 'Bar de ligne',
      img: 'https://img.passeportsante.net/1200x675/2021-03-19/i100431-darne-de-saumon.webp',
      price: 15,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum hic vero ex, iste, adipisci, mollitia nostrum eos voluptatibus odit incidunt perspiciatis explicabo provident molestiae! Nemo molestias totam dicta provident quos!',
    },
    {
      title: 'Saumon',
      img: 'https://www.mangerbouger.fr/var/mb/storage/images/_aliases/reference/8/1/9/7/7918-1-eng-GB/poisson_bar.jpg',
      price: 18,
      description: '',
    },
    {
      title: 'Gambas',
      img: 'https://lh3.googleusercontent.com/proxy/GE3tXo7TFsNouR3mpj66EVfBHPWuzQ8KoQYb4IpNBKL10_Lxdz2RqRv4BTtBYJL6JucTrQCAouKuKYsX17y0rrCu5akvf-_F9NvuOlROxTjOmBfrT5oFcWqf_Xys5VGdLtn2G4ofSWB6HUjk88JyOCh2_4EP8cFP',
      price: 18,
      description: '',
    },
    {
      title: 'Maquereau',
      img: 'https://www.papillesetpupilles.fr/wp-content/uploads/2020/06/Maquereau-Masala-.jpg',
      price: 18,
      description: '',
    },
  ];
  productsPage = ProduitsListPage;

  constructor() {}

  ngOnInit() {}
}
