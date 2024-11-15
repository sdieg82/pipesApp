import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MenuModule,
    CommonModule,
    MenubarModule,
    RouterModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  public menuItems:MenuItem[]=[];

  constructor(private router: Router) {}

  ngOnInit() {
    this.menuItems = [
        {
            label: 'Pipes de angular',
            icon: 'pi pi-desktop',
            items:[
              {
                label:'Textos y Fechas',
                icon:'pi pi-align-left',
                routerLink:'/'
              },
              {
                label:'Números',
                icon:'pi pi-dollar',
                routerLink:'numbers'
              },
              {
                label:'No comunes',
                icon:'pi pi-globe',
                routerLink:'uncommon'
              },
            ]
        },
        {
            label: 'Pipes personalizados',
            icon: 'pi pi-cog',
            items:[
              {
                label:'Otro elemento',
                icon:'pi pi-globe'
              }
            ]
        }
    ];
}

}
