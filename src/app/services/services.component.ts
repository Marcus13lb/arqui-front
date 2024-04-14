import { Component } from '@angular/core';
import { ServiciosService } from '../api/servicios.service';
import { Response } from 'src/utils/response';
import { HttpErrorResponse } from '@angular/common/http';
import { DataService } from '../api/data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  
  description = null
  list: any[] = []

  constructor(private dataService: DataService, private serviciosService: ServiciosService){
    this.dataService.data.subscribe(data => {
      if(data !== null){
        this.description = data.find((el:any) => el.clave === 'services_description')?.valor;
      }
    })
    this.get()
  }

  get = () => {
    this.serviciosService.get().subscribe({
      next: (response: Response) => {
        this.list = response.result
      },
      error: (err:HttpErrorResponse) => {
        this.list = []
      }
    })
  }
}
