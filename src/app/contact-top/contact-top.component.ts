import { Component } from '@angular/core';
import { EMAIL, TELEFONO } from 'src/utils/constants';

@Component({
  selector: 'app-contact-top',
  templateUrl: './contact-top.component.html',
  styleUrls: ['./contact-top.component.scss']
})
export class ContactTopComponent {
  email = EMAIL
  telefono = TELEFONO
}
