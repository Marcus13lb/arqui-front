import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Response } from 'src/utils/response';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private http: HttpClient) { }

  get = ():Observable<Response | any> => {
    return this.http.get<Response | any>(`${environment.apiUrl}/proyectos`);
  }
}
