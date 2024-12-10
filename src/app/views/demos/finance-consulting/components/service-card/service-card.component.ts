import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { services } from '../../data'
import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { register } from 'swiper/element'
import { SwiperOptions } from 'swiper/types'
import { Autoplay, Navigation } from 'swiper/modules'
import { DomSanitizer } from '@angular/platform-browser'
register()

@Component({
  selector: 'finance-consulting-service-card',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './service-card.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ServiceCardComponent {
  servicesData = services

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.servicesData.forEach((item) => {
      item.sanitizedIcon = this.sanitizer.bypassSecurityTrustHtml(item.icon)
    })
  }

  serviceSwiper: SwiperOptions = {
    modules: [Navigation, Autoplay],
    autoplay: true,
    spaceBetween: 40,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next-team',
      prevEl: '.swiper-button-prev-team',
    },
    breakpoints: {
      '768': { slidesPerView: 2 },
      '992': { slidesPerView: 2 },
      '1200': { slidesPerView: 3 },
    },
  }
}
