import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettleTabPageComponent } from './settle-tab-page.component';

describe('SettleTabPageComponent', () => {
  let component: SettleTabPageComponent;
  let fixture: ComponentFixture<SettleTabPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettleTabPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettleTabPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
