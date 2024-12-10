import { Component } from '@angular/core'
import { LightgalleryModule } from 'lightgallery/angular'
import lgVideo from 'lightgallery/plugins/video'

@Component({
  selector: 'service-single-video-image',
  standalone: true,
  imports: [LightgalleryModule],
  templateUrl: './video-image.component.html',
  styleUrl: './video-image.components.scss',
})
export class VideoImageComponent {
  setting = {
    download: false,
    counter: false,
    plugins: [lgVideo],
    selector: 'a',
  }
}
