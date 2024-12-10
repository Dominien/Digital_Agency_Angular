import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SupportLinkComponent } from './support-link.component'

describe('SupportLinkComponent', () => {
  let component: SupportLinkComponent
  let fixture: ComponentFixture<SupportLinkComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportLinkComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(SupportLinkComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
