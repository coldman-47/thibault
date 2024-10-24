import { CommonModule } from '@angular/common';
import { Component, EnvironmentInjector, inject } from '@angular/core';
import {
  IonBackButton,
  IonBadge,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonToolbar,
  IonList,
  IonAvatar,
  IonRow,
  IonCol, IonNote, IonText, IonTitle } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cartOutline, ellipse, square, triangle } from 'ionicons/icons';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTitle, IonText, IonNote, 
    IonAvatar,
    IonList,
    IonItem,
    IonBadge,
    IonContent,
    IonButton,
    IonButtons,
    IonBackButton,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonHeader,
    IonToolbar,
    CommonModule,
    IonMenu,
    IonMenuToggle,
    IonMenuButton,
    IonRow,
    IonCol
  ],
  providers: [CartService],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);
  cartItems: any[] = [];

  constructor(cartService: CartService) {
    addIcons({ triangle, ellipse, square, cartOutline });
    cartService.cartItems.subscribe({
      next: (val) => {
        localStorage.setItem('cart', JSON.stringify(val));
        this.cartItems = val;
      },
    });
  }
}
