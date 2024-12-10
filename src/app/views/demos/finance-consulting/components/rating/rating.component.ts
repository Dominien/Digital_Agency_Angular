import { Component } from '@angular/core'
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'finance-consulting-rating',
  standalone: true,
  imports: [NgbRatingModule],
  templateUrl: './rating.component.html',
  styles: ``,
})
export class RatingComponent {}
