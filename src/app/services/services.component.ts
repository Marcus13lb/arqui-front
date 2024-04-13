import { Component } from '@angular/core';
import { SERVICES_DESCRIPTION } from 'src/utils/constants';
import { ServiciosService } from '../api/servicios.service';
import { Response } from 'src/utils/response';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  
  description = SERVICES_DESCRIPTION
  list: any[] = []

  constructor(private serviciosService: ServiciosService){
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
