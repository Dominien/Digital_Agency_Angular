import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { register } from 'swiper/element'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
register()

@Component({
  selector: 'design-agency-hero',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './hero.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeroComponent {
  designHeroSwiper: SwiperOptions = {
    autoplay: true,
    modules: [Autoplay, Pagination, EffectFade],
    effect: 'fade',
    speed: 1500,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  }
}
