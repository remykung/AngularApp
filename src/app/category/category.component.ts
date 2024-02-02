import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from '../item-card/item-card.component';
import { ItemCard } from '../itemcard';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [ ItemCardComponent,
     CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  itemCardList: ItemCard[] = [
    {
      id: 0,
      name: 'Men Clothes',
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
      items: 4,
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
      items: 0
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
      items: 1,
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
      items: 1,
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
      items: 1,
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      photo: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
      items: 2
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
      items: 5,
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      photo: `${this.baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
      items: 2,
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      photo: `${this.baseUrl}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,
      items: 10
    }
  ];

}
