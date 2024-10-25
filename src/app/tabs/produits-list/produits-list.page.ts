import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonRow,
  IonSearchbar,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { environment } from 'src/environments/environment';
import { DetailsComponent } from '../produits/details/details.component';

@Component({
  selector: 'app-produits-list',
  templateUrl: './produits-list.page.html',
  styleUrls: ['./produits-list.page.scss'],
  standalone: true,
  imports: [
    IonSearchbar,
    IonText,
    IonGrid,
    IonCol,
    IonRow,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterModule,
    DetailsComponent,
    HttpClientModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProduitsListPage implements OnInit {
  @ViewChild('modal') modal: any;
  selectedProduct?: any;

  productsOnSale: any[] = [];
  products:any[] = environment.products;

  constructor() {}

  ngOnInit() {
    console.log(this.products);
    
    this.productsOnSale = this.products.map((p) => p.sale);
  }

  showDetails(product: any) {
    this.selectedProduct = product;
    this.modal.nativeElement.present();
  }
}
