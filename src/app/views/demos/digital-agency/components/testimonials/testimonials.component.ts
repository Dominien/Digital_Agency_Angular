import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { NgbNavModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap'
import { register } from 'swiper/element'
import { Autoplay, EffectFade } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
import { testimonials } from '../../data'
register()
@Component({
  selector: 'digital-agency-testimonials',
  standalone: true,
  imports: [SwiperDirective, NgbNavModule, NgbRatingModule],
  templateUrl: './testimonials.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimonialsComponent {
  testimonials = testimonials
  swiperTestimonial: SwiperOptions = {
    modules: [EffectFade, Autoplay],
    effect: 'fade',
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  }
}
