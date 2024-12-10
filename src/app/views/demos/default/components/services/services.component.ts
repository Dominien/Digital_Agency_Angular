import { Component } from '@angular/core'
import { services } from '../../data'

@Component({
  selector: 'default-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styles: ``,
})
export class ServicesComponent {
  servicesData = services
}
