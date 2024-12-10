import { Component, ElementRef, HostListener } from '@angular/core'

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [],
  template: ` <div class="back-top" (click)="scrollToTop()"></div> `,
  styles: ``,
})
export class BackToTopComponent {
  constructor(private eleRef: ElementRef) {}

  scrollOffset = 450
  button!: HTMLElement

  offsetFromTop!: number
  progress!: SVGGeometryElement | null
  length!: number

  ngOnInit() {
    this.button = this.eleRef.nativeElement.querySelector('.back-top')
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (!this.button) return
    const target = window
    if (target && target.scrollY > this.scrollOffset) {
      this.button.classList.add('back-top-show')
    } else {
      this.button.classList.remove('back-top-show')
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
