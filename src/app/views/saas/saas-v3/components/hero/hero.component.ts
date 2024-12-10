import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { register } from 'swiper/element'
import { SwiperOptions } from 'swiper/types'
import { clients } from '../../data'
import { RouterModule } from '@angular/router'
import { Autoplay } from 'swiper/modules'
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap'
import { LightgalleryModule } from 'lightgallery/angular'
import lgVideo from 'lightgallery/plugins/video'
register()

@Component({
  selector: 'saas-v3-hero',
  standalone: true,
  imports: [SwiperDirective, RouterModule, NgbRatingModule, LightgalleryModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeroComponent {
  clientsDataImage = clients
  saasConfig: SwiperOptions = {
    modules: [Autoplay],
    autoplay: true,
    slidesPerView: 2,
    spaceBetween: 40,
    breakpoints: {
      '576': { slidesPerView: 3 },
      '768': { slidesPerView: 5 },
      '992': { slidesPerView: 3 },
      '1200': { slidesPerView: 4 },
    },
  }

  setting = {
    download: false,
    counter: false,
    plugins: [lgVideo],
    selector: 'a',
  }
}
