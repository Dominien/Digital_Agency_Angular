import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'saas-v3-testimonials',
  standalone: true,
  imports: [RouterLink, NgbRatingModule],
  templateUrl: './testimonials.component.html',
  styles: ``,
})
export class TestimonialsComponent {}
