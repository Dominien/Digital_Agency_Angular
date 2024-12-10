import { Component } from '@angular/core'
import { BlogSidebarComponent } from '../blog-sidebar/blog-sidebar.component'
import { LightgalleryModule } from 'lightgallery/angular'
import lgVideo from 'lightgallery/plugins/video'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'singleV2-blog-detail',
  standalone: true,
  imports: [BlogSidebarComponent, LightgalleryModule, NgbDropdownModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss',
})
export class BlogDetailComponent {
  setting = {
    download: false,
    counter: false,
    plugins: [lgVideo],
    selector: 'a',
  }
}
