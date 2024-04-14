import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment.development';
import { DataService } from './api/data.service';
import { Response } from 'src/utils/response';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  spinner = SPINNER;
  data: any = null;
  constructor(private title: Title, private dataService: DataService, private loader: NgxUiLoaderService){

    this.dataService.data.subscribe(data => {
      if(data !== null){
        const app = data.find((el:any) => el.clave === 'app')?.valor;
        this.title.setTitle(app)
      }
    })
  }

  async ngOnInit() {
    this.loader.start()
    this.data = await this.getData()
    this.dataService.setData(this.data)
    this.loader.stop()
  }

  getData = () => {
    return new Promise(resolve => {
      this.dataService.getData().subscribe((data:Response) => {
        resolve(data.result)
      });
    });
  }
}
