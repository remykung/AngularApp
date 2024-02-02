import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule],
  template: `
    <button mat-flat-button color="primary" class="custom-button-size">{{ buttonText }}</button>
  `,
  styleUrls: ['./button.component.css'] 
})
export class ButtonComponent {
  @Input() buttonText: string = 'Default Text'; 
}
