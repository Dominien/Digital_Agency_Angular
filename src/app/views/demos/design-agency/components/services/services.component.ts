import { Component } from '@angular/core'
import { services } from '../../data'

@Component({
  selector: 'design-agency-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styles: ``,
})
export class ServicesComponent {
  servicesData = services
}
