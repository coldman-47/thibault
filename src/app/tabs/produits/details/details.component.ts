import { CommonModule, JsonPipe } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import {
  IonCard,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonImg,
  IonRow,
  IonText,
  IonTitle,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, cartOutline, remove } from 'ionicons/icons';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputNumberModule } from 'primeng/inputnumber';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  standalone: true,
  imports: [
    IonCardTitle,
    IonCard,
    IonImg,
    IonRow,
    IonContent,
    IonText,
    IonGrid,
    IonCol,
    IonRow,
    IonContent,
    IonTitle,
    CommonModule,
    JsonPipe,
    IonCard,
    IonIcon,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    InputNumberModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // providers: [CartService],
})
export class DetailsComponent implements OnInit {
  @Input() product: any;
  qty: number = 0;
  cart: any[] = [];

  constructor(
    private cartService: CartService,
    private toastCtrl: ToastController
  ) {
    addIcons({ remove, add, cartOutline });
  }

  ngOnInit() {
    this.cart = [...this.cartService.cartItems.value];
  }

  changeQuantity() {
    alert();
  }

  async addToCart() {
    const id = this.cart.findIndex((p) => p.id === this.product.id);
    if (id === -1) {
      this.product.quantity = this.qty;
      this.cart.push(this.product);
    } else {
      this.cart[id].quantity += this.qty;
    }
    this.cartService.cartItems.next(this.cart);
    const toast = this.toastCtrl.create({
      message: 'Le produit a été ajouté au panier!',
      duration: 1500,
      position: 'bottom',
      color: 'success',
      icon: 'cart-outline'
    });
    (await toast).present();
  }
}
