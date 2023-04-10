import { Component, OnInit } from '@angular/core';
import { IProductCard } from '../models/product-card.interface';
import { AnimeService } from '../services/anime.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private _animeService: AnimeService) {}

  products: IProductCard[] = [];

  ngOnInit(): void {
    this._animeService.getAnimes().subscribe((response) => {
      this.products = response;
    });
  }
}
