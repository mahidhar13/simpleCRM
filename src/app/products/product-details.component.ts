import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  pageTitle:string = 'Product Detail';
  product: IProduct | undefined
  constructor(private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
  }

  onBack(): void{
    this.router.navigate(['/products']);
  }
}
