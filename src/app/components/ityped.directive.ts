import { Directive, ElementRef, OnInit } from '@angular/core'
import { init } from 'ityped'

@Directive({
  selector: '[appTypedText]',
  standalone: true,
})
export class TypedTextDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const element = this.elementRef.nativeElement
    const strings = element.getAttribute('data-strings').split(',')

    const options: any = {}
    const showCursorAttr = element.getAttribute('data-show-cursor')
    if (showCursorAttr === 'false') {
      options.showCursor = false
    }
    const disableBackTypingAttr = element.getAttribute(
      'data-disable-back-typing'
    )
    if (disableBackTypingAttr === 'true') {
      options.disableBackTyping = true
    }

    init(element, { ...options, strings })
  }
}
