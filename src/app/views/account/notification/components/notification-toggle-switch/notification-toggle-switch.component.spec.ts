import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NotificationToggleSwitchComponent } from './notification-toggle-switch.component'

describe('NotificationToggleSwitchComponent', () => {
  let component: NotificationToggleSwitchComponent
  let fixture: ComponentFixture<NotificationToggleSwitchComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationToggleSwitchComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(NotificationToggleSwitchComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
