import { Component, Input } from '@angular/core';
import { ItemCard } from '../itemcard';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [MatButtonModule,
    MatIconModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {
  @Input() itemCard!: ItemCard;
}
