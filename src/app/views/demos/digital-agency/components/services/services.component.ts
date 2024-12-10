import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { register } from 'swiper/element'
import { SwiperOptions } from 'swiper/types'
import { services } from '../../data'
import { RouterModule } from '@angular/router'
import { Navigation } from 'swiper/modules'
register()
@Component({
  selector: 'digital-agency-services',
  standalone: true,
  imports: [SwiperDirective, RouterModule],
  templateUrl: './services.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ServicesComponent {
  servicesData = services
  swiperService: SwiperOptions = {
    modules: [Navigation],
    spaceBetween: 50,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next-team',
      prevEl: '.swiper-button-prev-team',
    },
    breakpoints: {
      '576': { slidesPerView: 1 },
      '768': { slidesPerView: 3 },
      '992': { slidesPerView: 3 },
      '1200': { slidesPerView: 4 },
    },
  }
}
