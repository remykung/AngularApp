import { Component, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CategoryComponent } from '../category/category.component';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { ExpandService } from '../expand.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
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
  };

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private router: Router, private expandService: ExpandService) {
  }

  ngAfterViewInit() {
    this.expandService.expandState$.subscribe((isExpanded: boolean) => {
      if (isExpanded) {
        this.sidenav.open();
      } else {
        this.sidenav.close();
      }
    });
  }

  setActiveItem(item: string): void {
    this.activeItem = item;
    const route = this.routeMap[item];
    if (route) {
      this.router.navigate([route]);
    }
  }
}
