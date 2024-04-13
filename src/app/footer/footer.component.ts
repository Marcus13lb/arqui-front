import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { EMAIL, FACEBOOK, INSTAGRAM, SOBRENOSOTROS, TELEFONO, UBICACION, UBICACION_DIRECCION } from 'src/utils/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  environment = environment
  currentYear = new Date().getFullYear()
  facebook = FACEBOOK
  instagram = INSTAGRAM
  nosotros = SOBRENOSOTROS
  email = EMAIL
  telefono = TELEFONO
  direccion = UBICACION_DIRECCION
  maps = UBICACION
}
