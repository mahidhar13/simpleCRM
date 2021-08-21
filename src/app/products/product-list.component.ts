import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  showImage:boolean = false;
  private _listFilter:string = '';
  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter=value;
    console.log('In setter', value);
    this.filteredProducts = this.performFilter(value);
  }

  pageTitle:string = 'Product List';
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product:IProduct) => 
      product.productName.toLocaleLowerCase().includes(filterBy));
  }
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  onRatingClicked(message:string): void{
      this.pageTitle = 'Product List: ' + message;
  }
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

}
