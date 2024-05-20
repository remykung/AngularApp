import { Component, EventEmitter, Output } from '@angular/core';
import { CategoryComponent } from '../category/category.component';
import { ButtonComponent } from '../button/button.component';
import { ExpandService } from '../expand.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ CategoryComponent, ButtonComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  buttonText: string = 'Collapse';

  constructor(private expandService: ExpandService) {
    this.expandService.expandState$.subscribe((isExpanded: boolean) => {
      this.buttonText = isExpanded ? 'Expand' : 'Collapse';
    });
  }

  toggleExpandState(): void {
    this.expandService.toggleExpandState();
  }
}
