import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SEOAgencyComponent } from './seoagency.component'

describe('SEOAgencyComponent', () => {
  let component: SEOAgencyComponent
  let fixture: ComponentFixture<SEOAgencyComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SEOAgencyComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(SEOAgencyComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
