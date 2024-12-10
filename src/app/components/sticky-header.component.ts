import { CommonModule } from '@angular/common'
import {
  Component,
  type OnDestroy,
  Input,
  ElementRef,
  Renderer2,
  inject,
} from '@angular/core'

@Component({
  selector: 'sticky-header-component',
  standalone: true,
  imports: [CommonModule],
  template: `<header
    [attr.data-bs-theme]="mode"
    [class.header-sticky-on]="scrollY > 400"
    [class]="headerClass"
  >
    <ng-content></ng-content>
  </header>`,
})
export class StickyHeaderComponent implements OnDestroy {
  @Input() headerClass!: string
  @Input() mode?: 'light' | 'dark'
  private render = inject(Renderer2)

  scrollY = 0
  constructor(private elementRef: ElementRef) {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
    this.handleScroll()
  }

  ngOnInit(): void {
    if (this.mode) {
      this.render.setAttribute(
        this.elementRef.nativeElement,
        'data-bs-theme',
        this.mode
      )
    }
  }

  handleScroll = () => {
    this.scrollY = window.scrollY
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
