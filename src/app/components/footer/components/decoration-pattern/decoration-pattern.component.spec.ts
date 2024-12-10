import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DecorationPatternComponent } from './decoration-pattern.component'

describe('DecorationPatternComponent', () => {
  let component: DecorationPatternComponent
  let fixture: ComponentFixture<DecorationPatternComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecorationPatternComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(DecorationPatternComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
