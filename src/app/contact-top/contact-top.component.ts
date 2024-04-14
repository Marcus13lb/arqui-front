import { Component } from '@angular/core';
import { DataService } from '../api/data.service';

@Component({
  selector: 'app-contact-top',
  templateUrl: './contact-top.component.html',
  styleUrls: ['./contact-top.component.scss']
})
export class ContactTopComponent {
  email : any = null 
  telefono : any = null 

  constructor(private dataService: DataService){
    this.dataService.data.subscribe(data => {
      if(data !== null){
        this.email = data.find((el:any) => el.clave === 'email')?.valor;
        this.telefono = data.find((el:any) => el.clave === 'telefono')?.valor;
      }
    })
  }
}
