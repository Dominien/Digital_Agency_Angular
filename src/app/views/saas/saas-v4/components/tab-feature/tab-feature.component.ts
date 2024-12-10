import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'saas-v4-tab-feature',
  standalone: true,
  imports: [NgbNavModule, RouterModule],
  templateUrl: './tab-feature.component.html',
  styles: ``,
})
export class TabFeatureComponent {}
