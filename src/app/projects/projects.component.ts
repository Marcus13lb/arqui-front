import { Component } from '@angular/core';
import { ProyectosService } from '../api/proyectos.service';
import { CAROUSEL_CONF } from 'src/utils/constants';
import { Response } from 'src/utils/response';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { DataService } from '../api/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  
  environment = environment
  description = null
  list: any[] = []
  showFullScreen: boolean = false
  photo : any = null
  carousel = CAROUSEL_CONF

  constructor(private dataService: DataService, private proyectoService: ProyectosService){
    this.dataService.data.subscribe(data => {
      if(data !== null){
        this.description = data.find((el:any) => el.clave === 'projects_description').valor;
      }
    })
    this.get()
  }

  get = () => {
    this.proyectoService.get().subscribe({
      next: (response: Response) => {
        this.list = response.result
      },
      error: (err:HttpErrorResponse) => {
        this.list = []
      }
    })
  }

  verFoto = (image:string) => {
    this.showFullScreen = true
    this.photo = `${this.environment.apiUrl}/public/${image}`
  }

}
