import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataSource = new BehaviorSubject<any>(null);
  public data = this.dataSource.asObservable();

  constructor(private http: HttpClient) { }

  getData = ():Observable<Response | any> => {
    return this.http.get<Response | any>(`${environment.apiUrl}/web`);
  }

  setData = (data:any) => {
    this.dataSource.next(data);
  }

}
