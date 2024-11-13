import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import {CardModule} from 'primeng/card'
import {FieldsetModule} from 'primeng/fieldset'
import { ButtonModule } from 'primeng/button';
import { interval, tap } from 'rxjs';
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

  //i18nPlural
  public clients:string[]=['Maria','Pedro','Fernando','Paula','Valeria']
  public clientsMap={
    '=0':'no tenemos ningún cliente esperando...',
    '=1':'un cliente esperando...',
    '=2':'tenemos 2 clientes esperando...',
    'other':'tenemos # clientes esperando...',

  }

  //keyValuPipe
  public person={
    name:'Fernando',
    age:36,
    addres:'Ottawa,Canada'
  }

  //async Pipe
  // public myObservableTimer=interval(2000).pipe(
  //   tap(value=>console.log('tap:',value))
  // )



  deleteClient():void{
    this.clients.shift()
  }
}
