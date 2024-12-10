import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { register } from 'swiper/element'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
register()
@Component({
  selector: 'digital-agency-hero',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './hero.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeroComponent {
  digitalTestimonial: SwiperOptions = {
    modules: [Autoplay, Pagination, EffectFade],
    effect: 'fade',
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '#hero-pagination',
      clickable: true,
    },
  }
}
