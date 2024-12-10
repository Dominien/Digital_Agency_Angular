import { Component } from '@angular/core'
import { works } from '../../data'

@Component({
  selector: 'contact-v2-our-work',
  standalone: true,
  imports: [],
  templateUrl: './our-work.component.html',
  styles: ``,
})
export class OurWorkComponent {
  workList = works
}
