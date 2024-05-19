import { Component, EventEmitter, Output } from '@angular/core';
import { CategoryComponent } from '../category/category.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ CategoryComponent, ButtonComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Output() sidenavToggle = new EventEmitter<void>();

  toggleSidenav() {
    this.sidenavToggle.emit();
  }
}
