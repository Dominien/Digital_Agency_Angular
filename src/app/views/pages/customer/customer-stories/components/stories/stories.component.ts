import { Component } from '@angular/core'
import { stories } from '../../data'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'customer-stories',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './stories.component.html',
  styles: ``,
})
export class StoriesComponent {
  storyList = stories
}
