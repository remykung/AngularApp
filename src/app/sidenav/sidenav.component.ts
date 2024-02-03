import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ButtonComponent } from '../button/button.component';
import { MatListModule } from '@angular/material/list';
import { CategoryComponent } from '../category/category.component';
import { MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule,
    ButtonComponent,
    MatListModule,
    CategoryComponent,
    MatIconModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
}
