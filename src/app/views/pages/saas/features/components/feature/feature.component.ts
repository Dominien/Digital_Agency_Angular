import { Component, OnInit } from '@angular/core'
import { NgbNavModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap'
import Aos from 'aos'

@Component({
  selector: 'feature',
  standalone: true,
  imports: [NgbNavModule, NgbProgressbarModule],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss',
})
export class FeatureComponent implements OnInit {
  ngOnInit(): void {
    Aos.init()
  }
}
