import { ToggleHandelService } from './../../services/toggle-handel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  public sidNavToggle : boolean ;
  constructor(
    private toggleHandelService : ToggleHandelService
  ) { }

  ngOnInit(): void { 
   this.toggleHandelService.toggleHandelValue$.subscribe((data)=>{
     this.sidNavToggle = data
   })
  }

  
}
