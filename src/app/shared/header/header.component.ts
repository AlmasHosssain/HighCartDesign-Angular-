import { ToggleHandelService } from './../../services/toggle-handel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public toggleValueSet : boolean = false
  constructor(
     private toggleHandelService : ToggleHandelService
  ) { }

  ngOnInit(): void {
  }

  toggle(){
    this.toggleValueSet = !this.toggleValueSet
    this.toggleHandelService.toggleHandelValue$.next(this.toggleValueSet)
  }
}
