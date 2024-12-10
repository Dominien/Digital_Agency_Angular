import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { LightgalleryModule } from 'lightgallery/angular'
import { register } from 'swiper/element'
import lgVideo from 'lightgallery/plugins/video'
import type { SwiperOptions } from 'swiper/types'
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap'
register()

@Component({
  selector: 'aboutV3-banner',
  standalone: true,
  imports: [SwiperDirective, LightgalleryModule, NgbRatingModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BannerComponent {
  rating = 4.4
  setting = {
    download: false,
    counter: false,
    plugins: [lgVideo],
    selector: 'a',
  }

  swiperConfig: SwiperOptions = {
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

  ariaValueText(current: number, max: number) {
    return `${current} out of ${max} hearts`
  }
}
