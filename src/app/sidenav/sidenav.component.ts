import { Component } from '@angular/core';
<<<<<<< HEAD
import {MatSidenavModule} from '@angular/material/sidenav';
import { ButtonComponent } from '../button/button.component';
import { MatListModule } from '@angular/material/list';
import { CategoryComponent } from '../category/category.component';
import { MatIconModule} from '@angular/material/icon';

=======
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CategoryComponent } from '../category/category.component';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ProductComponent } from '../product/product.component';
>>>>>>> master

@Component({
  selector: 'app-sidenav',
  standalone: true,
<<<<<<< HEAD
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
=======
  imports: [MatSidenavModule, MatListModule, CategoryComponent, MatIconModule, RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  activeItem: string = '';

  routeMap: { [key: string]: string } = {
    'dashboard': '/dashboard',
    'products': '/product',
    'orders': '/orders',
    'categories': '/categories',
    // Add more routes here
  };
 

  constructor(private router: Router) {}

  setActiveItem(item: string): void {
    this.activeItem = item;
    const route = this.routeMap[item];
    if (route) {
      this.router.navigate([route]);
    }
  }
}
>>>>>>> master
