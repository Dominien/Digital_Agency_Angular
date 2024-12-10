import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { testimonials } from '../../data'
import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { register } from 'swiper/element'
import type { SwiperOptions } from 'swiper/types'
import { Autoplay, Navigation } from 'swiper/modules'
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap'
register()

@Component({
  selector: 'aboutV2-testimonials',
  standalone: true,
  imports: [SwiperDirective, NgbRatingModule],
  templateUrl: './testimonials.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimonialsComponent {
  rating = 4.5
  testimonialData = testimonials

  swiperConfig: SwiperOptions = {
    modules: [Navigation, Autoplay],
    spaceBetween: 30,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      '576': { slidesPerView: 1 },
      '768': { slidesPerView: 2 },
      '992': { slidesPerView: 2 },
    },
  }
}
