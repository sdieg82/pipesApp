import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import {CardModule} from 'primeng/card'

@Component({
  selector: 'app-basics-pages',
  standalone: true,
  imports: [CommonModule,PanelModule,CardModule],
  templateUrl: './basics-pages.component.html',
  styleUrl: './basics-pages.component.css'
})
export class BasicsPagesComponent {
  public nameLower:string='test de prueba'
  public nameUpper:string='TEST DE PRUEBA'
  public nameTitle:string='test de prueba'
  
  public customDate:Date=new Date()
}
