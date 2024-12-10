import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SaasV2Component } from './saas-v2.component'

describe('SaasV2Component', () => {
  let component: SaasV2Component
  let fixture: ComponentFixture<SaasV2Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaasV2Component],
    }).compileComponents()

    fixture = TestBed.createComponent(SaasV2Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
