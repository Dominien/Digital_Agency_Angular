import { Component } from '@angular/core'
import { workflowSteps } from '../../data'
import { LightgalleryModule } from 'lightgallery/angular'
import lgVideo from 'lightgallery/plugins/video'

@Component({
  selector: 'finance-consulting-work-flow',
  standalone: true,
  imports: [LightgalleryModule],
  templateUrl: './work-flow.component.html',
  styleUrl: './work-flow.component.scss',
})
export class WorkFlowComponent {
  workflowSteps = workflowSteps

  setting = {
    download: false,
    counter: false,
    plugins: [lgVideo],
    selector: 'a',
  }
}
