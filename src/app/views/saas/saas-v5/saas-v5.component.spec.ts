import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SaasV5Component } from './saas-v5.component'

describe('SaasV5Component', () => {
  let component: SaasV5Component
  let fixture: ComponentFixture<SaasV5Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaasV5Component],
    }).compileComponents()

    fixture = TestBed.createComponent(SaasV5Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
