import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { register } from 'swiper/element'
import { SwiperOptions } from 'swiper/types'
import { Autoplay } from 'swiper/modules'
import { clientData } from '../../data'
register()

@Component({
  selector: 'default-client',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './client.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ClientComponent {
  clientTestimonialData = clientData

  clientConfig: SwiperOptions = {
    modules: [Autoplay],
    loop: true,
    autoplay: true,
    slidesPerView: 2,
    spaceBetween: 50,
    breakpoints: {
      '576': { slidesPerView: 3 },
      '992': { slidesPerView: 4 },
      '1200': { slidesPerView: 5 },
    },
  }
}
