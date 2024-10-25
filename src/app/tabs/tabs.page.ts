import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EnvironmentInjector,
  inject,
} from '@angular/core';
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
  IonCol,
  IonNote,
  IonText,
  IonTitle,
  IonItemOption,
  IonItemSliding,
  IonItemOptions,
  IonFooter,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonInput,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  cartOutline,
  ellipse,
  square,
  triangle,
  trash,
  trashOutline,
  fishOutline,
  homeOutline,
  restaurantOutline,
  boatOutline,
} from 'ionicons/icons';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonFooter,
    IonItemOptions,
    IonItemSliding,
    IonItemOption,
    IonTitle,
    IonText,
    IonNote,
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
    IonCol,
    IonInput,
  ],
  providers: [CartService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);
  cartItems: any[] = [];

  constructor(private cartService: CartService) {
    addIcons({
      triangle,
      ellipse,
      square,
      cartOutline,
      trash,
      trashOutline,
      fishOutline,
      homeOutline,
      restaurantOutline,
      boatOutline,
    });
    cartService.cartItems.subscribe({
      next: (val) => {
        localStorage.setItem('cart', JSON.stringify(val));
        this.cartItems = val;
      },
    });
  }

  remove(i: number, e: any) {
    this.cartItems.splice(i, 1);
    this.cartService.cartItems.next(this.cartItems);
    console.log(e);
  }

  get total() {
    let sum = 0;
    this.cartItems.forEach((item) => (sum += item.price * item.quantity));
    return sum;
  }
}
