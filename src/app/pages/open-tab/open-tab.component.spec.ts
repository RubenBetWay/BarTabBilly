import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenTabPage } from './open-tab.component';

describe('OpenTabComponent', () => {
  let component: OpenTabPage;
  let fixture: ComponentFixture<OpenTabPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenTabPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
