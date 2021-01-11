import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleHandelService {

  constructor() { }

  public toggleHandelValue$ = new BehaviorSubject<boolean>(true)

}
