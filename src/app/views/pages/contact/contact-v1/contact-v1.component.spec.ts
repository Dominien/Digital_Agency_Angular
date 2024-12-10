import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ContactV1Component } from './contact-v1.component'

describe('ContactV1Component', () => {
  let component: ContactV1Component
  let fixture: ComponentFixture<ContactV1Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactV1Component],
    }).compileComponents()

    fixture = TestBed.createComponent(ContactV1Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
