import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import {CardModule} from 'primeng/card'


@Component({
  selector: 'app-numbers-page',
  standalone: true,
  imports: [CardModule,PanelModule,CommonModule],
  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.css'
})
export class NumbersPageComponent {

  public totalSells:number=215622.5566
  public percent:number=0.5566

}
