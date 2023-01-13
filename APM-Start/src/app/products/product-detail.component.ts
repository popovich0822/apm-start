import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './IProduct';

@Component({  
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product Detail";
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;

    this.product = {
      'productId': id,
      'productName': 'Leaf Rake',
      'productCode': '',
      'releaseDate': '',
      'description': '',
      'price': 19.95,
      'starRating': 3.2,
      'imageUrl': 'assets/images/leaf_rake.png'
    };
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}