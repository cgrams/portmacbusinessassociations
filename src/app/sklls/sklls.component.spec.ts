import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkllsComponent } from './sklls.component';

describe('SkllsComponent', () => {
  let component: SkllsComponent;
  let fixture: ComponentFixture<SkllsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkllsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkllsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
