import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MobileShowCaseComponent } from './mobile-show-case.component'

describe('MobileShowCaseComponent', () => {
  let component: MobileShowCaseComponent
  let fixture: ComponentFixture<MobileShowCaseComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileShowCaseComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(MobileShowCaseComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
