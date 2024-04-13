import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-contact-top',
  templateUrl: './contact-top.component.html',
  styleUrls: ['./contact-top.component.scss']
})
export class ContactTopComponent {
  environment = environment;
}
