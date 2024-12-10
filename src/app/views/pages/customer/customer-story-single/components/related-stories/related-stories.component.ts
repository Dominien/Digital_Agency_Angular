import { Component } from '@angular/core'
import { stories } from '../../data'

@Component({
  selector: 'customer-story-single-related-stories',
  standalone: true,
  imports: [],
  templateUrl: './related-stories.component.html',
  styles: ``,
})
export class RelatedStoriesComponent {
  storyList = stories
}
