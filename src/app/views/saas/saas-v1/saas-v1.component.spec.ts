import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SaasV1Component } from './saas-v1.component'

describe('SaasV1Component', () => {
  let component: SaasV1Component
  let fixture: ComponentFixture<SaasV1Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaasV1Component],
    }).compileComponents()

    fixture = TestBed.createComponent(SaasV1Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
