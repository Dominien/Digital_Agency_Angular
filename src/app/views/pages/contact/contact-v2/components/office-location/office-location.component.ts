import { Component } from '@angular/core'
import { locations } from '../../data'
import { JarallaxDirective } from '@/app/components/jarallax-directive.component'

@Component({
  selector: 'contact-v2-office-location',
  standalone: true,
  imports: [JarallaxDirective],
  templateUrl: './office-location.component.html',
  styles: ``,
})
export class OfficeLocationComponent {
  locationsList = locations
}
