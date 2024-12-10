import { Component } from '@angular/core'
import { locations } from '../../data'

@Component({
  selector: 'aboutV2-location',
  standalone: true,
  imports: [],
  templateUrl: './location.component.html',
  styles: ``,
})
export class LocationComponent {
  locationList = locations
}
