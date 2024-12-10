import { ComponentFixture, TestBed } from '@angular/core/testing'

import { Stories2Component } from './stories2.component'

describe('Stories2Component', () => {
  let component: Stories2Component
  let fixture: ComponentFixture<Stories2Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stories2Component],
    }).compileComponents()

    fixture = TestBed.createComponent(Stories2Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
