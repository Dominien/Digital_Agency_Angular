import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  AfterViewInit,
} from '@angular/core'
import Isotope from 'isotope-layout'
import imagesLoaded from 'imagesloaded'

@Directive({
  selector: '[appIsotope]',
  standalone: true,
})
export class IsotopeDirective implements AfterViewInit, OnChanges, OnDestroy {
  @Input() appIsotopeOptions: Isotope.IsotopeOptions = {}
  private isotopeInstance!: Isotope

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.initializeIsotope()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['appIsotopeOptions'] &&
      !changes['appIsotopeOptions'].isFirstChange()
    ) {
      this.updateIsotopeOptions()
    }
  }

  ngOnDestroy(): void {
    if (this.isotopeInstance) {
      this.isotopeInstance.destroy()
    }
  }

  private initializeIsotope(): void {
    imagesLoaded(this.elementRef.nativeElement, () => {
      this.isotopeInstance = new Isotope(
        this.elementRef.nativeElement,
        this.appIsotopeOptions
      )
    })
  }

  private updateIsotopeOptions(): void {
    if (this.isotopeInstance) {
      this.isotopeInstance.arrange(this.appIsotopeOptions)
    }
  }
  public arrangeIsotope(filter: string): void {
    if (this.isotopeInstance) {
      this.isotopeInstance.arrange({ filter: filter })
    }
  }
}
