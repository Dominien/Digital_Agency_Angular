import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { register } from 'swiper/element'
import { SwiperOptions } from 'swiper/types'
import { clients } from '../../data'
import { Autoplay } from 'swiper/modules'
register()
@Component({
  selector: 'saas-v5-clients',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './clients.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ClientsComponent {
  clientsData = clients
  clientTestimonial: SwiperOptions = {
    modules: [Autoplay],
    autoplay: true,
    loop: false,
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
      '576': { slidesPerView: 2 },
      '768': { slidesPerView: 3 },
      '992': { slidesPerView: 4 },
      '1200': { slidesPerView: 6 },
    },
  }
}
