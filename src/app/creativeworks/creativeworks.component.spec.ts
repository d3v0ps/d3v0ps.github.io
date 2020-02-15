import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeworksComponent } from './Creativeworks.component';

describe('CreativeworksComponent', () => {
  let component: CreativeworksComponent;
  let fixture: ComponentFixture<CreativeworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreativeworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreativeworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
