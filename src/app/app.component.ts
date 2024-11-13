import { CommonModule } from '@angular/common';
import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuComponent } from "./shared/components/menu/menu.component";
import localeEsEC from "@angular/common/locales/es-EC";
import {registerLocaleData} from '@angular/common'

registerLocaleData(localeEsEC)
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    CommonModule,
    MenuComponent, 
],
  templateUrl: './app.component.html',
  providers:[
    {
      provide:LOCALE_ID, useValue:'es-EC'
    }
  ],
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) {}
  public title:string='test de prueba'

  ngOnInit() {
      this.primengConfig.ripple = true;
  }
}