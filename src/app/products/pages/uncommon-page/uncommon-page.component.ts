import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import {CardModule} from 'primeng/card'
import {FieldsetModule} from 'primeng/fieldset'
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-uncommon-page',
  standalone: true,
  imports: [CardModule,PanelModule,CommonModule,FieldsetModule,ButtonModule],
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  //i18n Select
  public name:string='Loren Impsun '
  public gender :'male'|'female'='male'

  changeClient():void{
    this.name='female'
    this.gender='female'
  }
}
