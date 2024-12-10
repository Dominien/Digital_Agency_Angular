import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { projectInfoData } from './data'
import { SwiperOptions } from 'swiper/types'
import { SwiperDirective } from '@/app/components/swiper-directive.component'
import { register } from 'swiper/element'
import { LightgalleryModule } from 'lightgallery/angular'
import lgVideo from 'lightgallery/plugins/video'
import { Footer1Component } from '@/app/components/footer/footer1/footer1.component'
import { RouterModule } from '@angular/router'
import { currency } from '@/app/common/constants'
import { Pagination } from 'swiper/modules'
register()

@Component({
  selector: 'app-case-study-v1',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    SwiperDirective,
    LightgalleryModule,
    Footer1Component,
    RouterModule,
  ],
  templateUrl: './case-study-v1.component.html',
  styleUrl: './case-study-v1.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CaseStudyV1Component {
  currency = currency
  projectInfoData = projectInfoData

  workSwiper: SwiperOptions = {
    modules: [Pagination],
    loop: false,
    spaceBetween: 40,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      '576': { slidesPerView: 1 },
      '768': { slidesPerView: 2 },
      '1200': { slidesPerView: 3 },
    },
  }

  setting = {
    download: false,
    counter: false,
    plugins: [lgVideo],
    selector: 'a',
  }
}
