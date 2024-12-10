import { ParallaxMouseMoveDirective } from '@/app/components/parralax-directive'
import { Component, OnInit } from '@angular/core'
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap'
import Aos from 'aos'

@Component({
  selector: 'saas-v2-hero',
  standalone: true,
  imports: [ParallaxMouseMoveDirective, NgbRatingModule],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent implements OnInit {
  ngOnInit(): void {
    Aos.init()
  }
}
