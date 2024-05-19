import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
=======
import { ToolbarComponent} from './toolbar/toolbar.component';
>>>>>>> master
import { SidenavComponent } from './sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, 
    ButtonComponent,
=======
  imports: [
>>>>>>> master
    ToolbarComponent,
    SidenavComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-name';
}
