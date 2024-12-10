import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { LightgalleryModule } from 'lightgallery/angular'
import lgVideo from 'lightgallery/plugins/video'

@Component({
  selector: 'singleV1-blog-detail',
  standalone: true,
  imports: [LightgalleryModule, NgbDropdownModule, CommonModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss',
})
export class BlogDetailComponent {
  popularTags = [
    'blog',
    'business',
    'bootstrap',
    'data science',
    'deep learning',
    'deep learning',
    'deep learning',
  ]

  setting = {
    download: false,
    counter: false,
    plugins: [lgVideo],
    selector: 'a',
  }
}
