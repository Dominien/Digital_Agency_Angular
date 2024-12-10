import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { testimonials } from '../../data'
import { SwiperOptions } from 'swiper/types'
import { Autoplay, EffectFade } from 'swiper/modules'
import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { register } from 'swiper/element'
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap'
register()

@Component({
  selector: 'saas-v2-testimonials',
  standalone: true,
  imports: [SwiperDirective, NgbRatingModule],
  templateUrl: './testimonials.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimonialsComponent {
  testimonialsData = testimonials

  testimonialSwiper: SwiperOptions = {
    modules: [EffectFade, Autoplay],
    loop: true,
    effect: 'fade',
    grabCursor: true,
    autoplay: true,
  }
}
