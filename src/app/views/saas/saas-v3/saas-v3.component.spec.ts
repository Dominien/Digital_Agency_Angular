import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SaasV3Component } from './saas-v3.component'

describe('SaasV3Component', () => {
  let component: SaasV3Component
  let fixture: ComponentFixture<SaasV3Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaasV3Component],
    }).compileComponents()

    fixture = TestBed.createComponent(SaasV3Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
