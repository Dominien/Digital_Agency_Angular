import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { register } from 'swiper/element'
import { SwiperOptions } from 'swiper/types'
import { clients } from '../../data'
import { TypedTextDirective } from '@/app/components/ityped.directive'
register()
@Component({
  selector: 'saas-v1-hero',
  standalone: true,
  imports: [SwiperDirective, TypedTextDirective],
  templateUrl: './hero.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeroComponent {
  clientsData = clients
  swiperConfig: SwiperOptions = {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 50,
    breakpoints: {
      '576': { slidesPerView: 3 },
      '768': { slidesPerView: 4 },
      '992': { slidesPerView: 5 },
      '1200': { slidesPerView: 6 },
    },
  }
}
