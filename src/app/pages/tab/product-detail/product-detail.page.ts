import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonFabButton,
  IonIcon,
  IonRow,
  IonCol, IonList, IonItem, IonLabel, IonText, IonListHeader, IonAvatar, IonButton, IonFooter } from '@ionic/angular/standalone';
import { Strings } from 'src/app/enum/strings.enum';
import { Product } from 'src/app/interfaces/product.interface';
import { Seller } from 'src/app/interfaces/seller.interface';
import { Category } from 'src/app/interfaces/category.interface';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { addIcons } from 'ionicons';
import { heartOutline, shareSocialOutline, star, chatboxEllipses, call, bagHandle } from 'ionicons/icons';
// import { ImageRectBoxComponent } from 'src/app/components/image-rect-box/image-rect-box.component';
// import { VegNonvegIndicatorComponent } from 'src/app/widgets/veg-nonveg-indicator/veg-nonveg-indicator.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.css'],
  standalone: true,
  imports: [IonFooter, IonButton, IonAvatar, IonListHeader, IonText, IonLabel, IonItem, IonList, 
    IonCol,
    IonRow,
    IonIcon,
    IonFabButton,
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonToolbar,
    NgClass,
    // ImageRectBoxComponent,
    // VegNonvegIndicatorComponent
  ],
})
export class ProductDetailPage implements OnInit {

  // In your component
addToCart() {
  console.log('Add to cart clicked');
  // Add your logic here
}

  currency = Strings.currency;
  readMore = signal<boolean>(false);
  productDetails = signal<
    (Product & { seller?: Seller; category?: Category }) | null
  >(null);
  id!: number;

  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  constructor() {
    addIcons({heartOutline,shareSocialOutline,star,chatboxEllipses,call,bagHandle,});
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    if (!id) {
      return;
    }
    
    this.id = parseInt(id);
    const result: any = this.productService.getProductById(this.id);
    // support Observable, Promise or direct value
    if (result && typeof result.subscribe === 'function') {
      result.subscribe((product: Product & { seller?: Seller; category?: Category } | null) => {
        console.log(product);
        if (product) this.productDetails.set(product);
      });
    } else if (result && typeof result.then === 'function') {
      result.then((product: Product & { seller?: Seller; category?: Category } | null) => {
        console.log(product);
        if (product) this.productDetails.set(product);
      });
    } else {
      const product = result as Product & { seller?: Seller; category?: Category } | null;
      console.log(product);
      if (product) this.productDetails.set(product);
    }
  }
}