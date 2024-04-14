import { Component } from '@angular/core';
import { NAVBAR_ITEMS } from 'src/utils/constants';
import { DataService } from '../api/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  items: any = NAVBAR_ITEMS
  email = null
  telefono = null
  direccion = null
  maps = null
  showContact : boolean = false
  showMenu: boolean = false

  constructor(private dataService: DataService){
    this.dataService.data.subscribe(data => {
      if(data !== null){
        this.email = data.find((el:any) => el.clave === 'email')?.valor;
        this.telefono = data.find((el:any) => el.clave === 'telefono')?.valor;
        this.maps = data.find((el:any) => el.clave === 'ubicacion_url')?.valor;
        this.direccion = data.find((el:any) => el.clave === 'direccion')?.valor;
      }
    })
  }

  scrollToElement(id:string) {
    this.showMenu = false
    if(id === 'contact') this.showContact = true
    else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({behavior: "smooth"});
      }
    }
  }
}
