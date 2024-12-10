import { Component, OnInit } from '@angular/core'
import { NgbNavModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap'
import Aos from 'aos'

@Component({
  selector: 'saas-v2-features',
  standalone: true,
  imports: [NgbNavModule, NgbProgressbarModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent implements OnInit {
  ngOnInit(): void {
    Aos.init()
  }
}
