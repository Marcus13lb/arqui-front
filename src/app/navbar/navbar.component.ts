import { Component } from '@angular/core';
import { EMAIL, NAVBAR_ITEMS, TELEFONO, UBICACION, UBICACION_DIRECCION } from 'src/utils/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  items: any = NAVBAR_ITEMS
  email = EMAIL
  telefono = TELEFONO
  direccion = UBICACION_DIRECCION
  maps = UBICACION
  showContact : boolean = false

  scrollToElement(id:string) {

    if(id === 'contact') this.showContact = true
    else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({behavior: "smooth"});
      }
    }
  }
}
