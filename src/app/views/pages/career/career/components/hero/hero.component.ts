import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { register } from 'swiper/element'
import { Autoplay } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'
register()

@Component({
  selector: 'career-hero',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './hero.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeroComponent {
  swiperConfig: SwiperOptions = {
    modules: [Autoplay],
    spaceBetween: 50,
    speed: 26000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      '576': { slidesPerView: 2 },
      '992': { slidesPerView: 3 },
      '1200': { slidesPerView: 4 },
      '1400': { slidesPerView: 5 },
    },
  }
}
