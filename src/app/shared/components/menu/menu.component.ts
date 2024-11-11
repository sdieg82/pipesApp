import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MenuModule,
    CommonModule,
    MenubarModule 
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  public menuItems:MenuItem[]=[];

  ngOnInit() {
    this.menuItems = [
        {
            label: 'Pipes de angular',
            icon: 'pi pi-desktop',
            items:[
              {
                label:'Textos y Fechas',
                icon:'pi pi-align-left'
              },
              {
                label:'Números',
                icon:'pi pi-dollar'
              },
              {
                label:'No comunes',
                icon:'pi pi-globe'
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
