import { Component } from '@angular/core';
import { SLOGAN } from 'src/utils/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  slogan = SLOGAN;

  scrollToElement(id:string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: "smooth"});
    }
  }
}
