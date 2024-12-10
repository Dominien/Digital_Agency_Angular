import { JarallaxDirective } from '@/app/components/jarallax-directive.component'
import { Component } from '@angular/core'
import { LightgalleryModule } from 'lightgallery/angular'
import lgVideo from 'lightgallery/plugins/video'

@Component({
  selector: 'landing-product-video',
  standalone: true,
  imports: [JarallaxDirective, LightgalleryModule],
  templateUrl: './product-video.component.html',
  styleUrl: './product-video.component.scss',
})
export class ProductVideoComponent {
  setting = {
    download: false,
    counter: false,
    plugins: [lgVideo],
    selector: 'a',
  }
}
