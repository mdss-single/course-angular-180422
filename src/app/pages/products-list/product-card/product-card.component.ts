import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {
  @Input() product!: {
    feedbacksCount: number,
    images: {
      source: string,
      url: string
    }[]
    name: string,
    price: number,
    rating: number,
    status: number,
    subCategory: string,
    _id: string,
    roundedRating: number
  };

  constructor() { }

  ngOnInit(): void {
  }

}
