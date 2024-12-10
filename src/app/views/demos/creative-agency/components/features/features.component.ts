import { Component, OnInit } from '@angular/core'
import { features } from '../../data'
import {
  NgbAccordionModule,
  NgbProgressbarModule,
} from '@ng-bootstrap/ng-bootstrap'
import AOS from 'aos'

@Component({
  selector: 'creative-agency-features',
  standalone: true,
  imports: [NgbAccordionModule, NgbProgressbarModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent implements OnInit {
  featuresData = features

  ngOnInit(): void {
    AOS.init()
  }
}
