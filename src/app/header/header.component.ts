import { Component } from '@angular/core';
import { DataService } from '../api/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  slogan = null;

  constructor(private dataService: DataService){
    this.dataService.data.subscribe(data => {
      if(data !== null){
        this.slogan = data.find((el:any) => el.clave === 'slogan').valor;
      }
    })
  }

  scrollToElement(id:string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: "smooth"});
    }
  }
}
