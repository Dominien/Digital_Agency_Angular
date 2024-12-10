import { ComponentFixture, TestBed } from '@angular/core/testing'

import { Footer7Component } from './footer7.component'

describe('Footer7Component', () => {
  let component: Footer7Component
  let fixture: ComponentFixture<Footer7Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer7Component],
    }).compileComponents()

    fixture = TestBed.createComponent(Footer7Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
