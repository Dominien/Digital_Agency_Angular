import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SaasV4Component } from './saas-v4.component'

describe('SaasV4Component', () => {
  let component: SaasV4Component
  let fixture: ComponentFixture<SaasV4Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaasV4Component],
    }).compileComponents()

    fixture = TestBed.createComponent(SaasV4Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
