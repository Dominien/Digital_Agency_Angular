import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ContactV2Component } from './contact-v2.component'

describe('ContactV2Component', () => {
  let component: ContactV2Component
  let fixture: ComponentFixture<ContactV2Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactV2Component],
    }).compileComponents()

    fixture = TestBed.createComponent(ContactV2Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
