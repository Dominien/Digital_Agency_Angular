import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { register } from 'swiper/element'
import { SwiperOptions } from 'swiper/types'
import { investors } from '../../data'
import { Autoplay } from 'swiper/modules'
import { currency } from '@/app/common/constants'
register()

@Component({
  selector: 'finance-consulting-clients',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './clients.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ClientsComponent {
  currency = currency
  clientData = investors
  clientSwiper: SwiperOptions = {
    modules: [Autoplay],
    loop: true,
    autoplay: true,
    slidesPerView: 2,
    spaceBetween: 50,
    breakpoints: {
      '576': { slidesPerView: 4 },
      '992': { slidesPerView: 4 },
      '1200': { slidesPerView: 5 },
    },
  }
}
