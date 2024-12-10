import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CaseStudyV2Component } from './case-study-v2.component'

describe('CaseStudyV2Component', () => {
  let component: CaseStudyV2Component
  let fixture: ComponentFixture<CaseStudyV2Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseStudyV2Component],
    }).compileComponents()

    fixture = TestBed.createComponent(CaseStudyV2Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
