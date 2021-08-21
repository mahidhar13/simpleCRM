import { Injectable } from '@angular/core';
import { IProduct } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): IProduct[] {
    return [
      {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2021",
        "description": "Garden cart description",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": 'assets/images/cart.jpeg'
      },
      {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2021",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": 'assets/images/hammer.jpeg'
      }
    ]
  }
  constructor() { }
}
