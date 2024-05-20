// expand.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpandService {
  private expandStateSubject = new BehaviorSubject<boolean>(true);
  expandState$ = this.expandStateSubject.asObservable();

  toggleExpandState(): void {
    const currentState = this.expandStateSubject.value;
    this.expandStateSubject.next(!currentState);
  }

  constructor() {}
}
