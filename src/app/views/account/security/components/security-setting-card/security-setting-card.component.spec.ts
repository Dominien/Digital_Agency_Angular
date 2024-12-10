import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SecuritySettingCardComponent } from './security-setting-card.component'

describe('SecuritySettingCardComponent', () => {
  let component: SecuritySettingCardComponent
  let fixture: ComponentFixture<SecuritySettingCardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecuritySettingCardComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(SecuritySettingCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
