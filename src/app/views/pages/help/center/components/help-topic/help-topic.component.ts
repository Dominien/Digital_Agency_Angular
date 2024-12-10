import { Component } from '@angular/core'
import { helpData } from '../../data'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'help-topic',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './help-topic.component.html',
  styles: ``,
})
export class HelpTopicComponent {
  helpTopics = helpData
}
