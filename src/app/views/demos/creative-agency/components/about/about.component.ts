import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'creative-agency-about',
  standalone: true,
  imports: [NgbNavModule, RouterModule],
  templateUrl: './about.component.html',
  styles: ``,
})
export class AboutComponent {}
