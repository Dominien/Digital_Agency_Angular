import { Component } from '@angular/core'
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component'

@Component({
  selector: 'app-single-v2',
  standalone: true,
  imports: [BlogDetailComponent],
  templateUrl: './single-v2.component.html',
  styles: ``,
})
export class SingleV2Component {}
