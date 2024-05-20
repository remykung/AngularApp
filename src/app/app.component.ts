import { Component, OnInit } from '@angular/core';
import { ToolbarComponent} from './toolbar/toolbar.component';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Subject } from 'rxjs';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ExpandService } from './expand.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ToolbarComponent,
    CommonModule,
    SidenavComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'project-name';
  isExpanded: boolean = true;

  constructor(private expandService: ExpandService) {}

  ngOnInit(): void {
    this.expandService.expandState$.subscribe((isExpanded: boolean) => {
      this.isExpanded = isExpanded;
    });
  }
}
