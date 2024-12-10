import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CaseStudyV1Component } from './case-study-v1.component'

describe('CaseStudyV1Component', () => {
  let component: CaseStudyV1Component
  let fixture: ComponentFixture<CaseStudyV1Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseStudyV1Component],
    }).compileComponents()

    fixture = TestBed.createComponent(CaseStudyV1Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
