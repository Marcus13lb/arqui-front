import { Component } from '@angular/core';
import { ProyectosService } from '../api/proyectos.service';
import { CAROUSEL_CONF, PROJECTS_DESCRIPTION } from 'src/utils/constants';
import { Response } from 'src/utils/response';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  
  environment = environment
  description = PROJECTS_DESCRIPTION
  list: any[] = []
  showFullScreen: boolean = false
  photo : any = null
  carousel = CAROUSEL_CONF

  constructor(private proyectoService: ProyectosService){
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
