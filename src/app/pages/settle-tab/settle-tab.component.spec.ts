import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettleTabPage } from './settle-tab.component';

describe('SettleTabPageComponent', () => {
  let component: SettleTabPage;
  let fixture: ComponentFixture<SettleTabPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettleTabPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettleTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
