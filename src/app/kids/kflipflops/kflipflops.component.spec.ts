import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KflipflopsComponent } from './kflipflops.component';

describe('KflipflopsComponent', () => {
  let component: KflipflopsComponent;
  let fixture: ComponentFixture<KflipflopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KflipflopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KflipflopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
