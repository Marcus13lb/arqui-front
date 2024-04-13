import { Component } from '@angular/core';
import { NAVBAR_ITEMS } from 'src/utils/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  items: any = NAVBAR_ITEMS;

  scrollToElement(id:string) {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: "smooth"});
    }
  }
}
