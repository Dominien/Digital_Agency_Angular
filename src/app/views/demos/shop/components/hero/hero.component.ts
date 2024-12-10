import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { Autoplay, Pagination } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'

@Component({
  selector: 'shop-hero',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './hero.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeroComponent {
  shopSwiper: SwiperOptions = {
    modules: [Autoplay, Pagination],
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination-line',
      clickable: true,
    },
  }
}
