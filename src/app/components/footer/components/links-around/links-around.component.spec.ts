import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LinksAroundComponent } from './links-around.component'

describe('LinksAroundComponent', () => {
  let component: LinksAroundComponent
  let fixture: ComponentFixture<LinksAroundComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinksAroundComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(LinksAroundComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
