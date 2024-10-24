import { CommonModule, JsonPipe } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputNumberModule } from 'primeng/inputnumber';
import { remove, add, cartOutline } from 'ionicons/icons';
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

  constructor(private cartService: CartService) {
    addIcons({ remove, add, cartOutline });
  }

  ngOnInit() {
    const cart = { ...this.cartService.cartItems.value };
  }

  changeQuantity() {
    alert();
  }

  addToCart() {
    this.cart.push(this.product);
    this.cartService.cartItems.next(this.cart);
  }
}
