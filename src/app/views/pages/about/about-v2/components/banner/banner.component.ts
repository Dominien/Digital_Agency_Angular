import { Component } from '@angular/core'
import lgVideo from 'lightgallery/plugins/video'
import { LightgalleryModule } from 'lightgallery/angular'

@Component({
  selector: 'aboutV2-banner',
  standalone: true,
  imports: [LightgalleryModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  setting = {
    download: false,
    counter: false,
    plugins: [lgVideo],
    selector: 'a',
  }
}
