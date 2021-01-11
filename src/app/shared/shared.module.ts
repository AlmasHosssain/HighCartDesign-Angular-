import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'

import { CardAreaComponent } from './outlook/card-area/card-area.component';
import { CardsComponent } from './outlook/cards/cards.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout'
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { LastComponent } from './outlook/last/last.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MiddleComponent } from './outlook/middle/middle.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidenavComponent, CardsComponent, MiddleComponent, LastComponent, CardAreaComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    HighchartsChartModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [HeaderComponent, FooterComponent, SidenavComponent,CardsComponent, MiddleComponent, LastComponent,CardAreaComponent]
})
export class SharedModule { }
