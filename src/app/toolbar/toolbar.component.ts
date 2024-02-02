import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { SearchbarComponent}  from '../searchbar/searchbar.component';

/**
 * @title Toolbar overview
 */
@Component({
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css'],
  standalone: true,
  imports: [MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    MatBadgeModule,
    SearchbarComponent],
})
export class ToolbarComponent {}