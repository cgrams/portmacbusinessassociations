import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCaseStudyComponent } from './example-case-study.component';

describe('ExampleCaseStudyComponent', () => {
  let component: ExampleCaseStudyComponent;
  let fixture: ComponentFixture<ExampleCaseStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleCaseStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleCaseStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
