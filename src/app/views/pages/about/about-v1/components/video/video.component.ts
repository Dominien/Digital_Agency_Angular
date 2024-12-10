import { Component } from '@angular/core'
import { LightgalleryModule } from 'lightgallery/angular'
import lgVideo from 'lightgallery/plugins/video'

@Component({
  selector: 'about-video',
  standalone: true,
  imports: [LightgalleryModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
export class VideoComponent {
  setting = {
    download: false,
    counter: false,
    plugins: [lgVideo],
    selector: 'a',
  }
}
