import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteloopComponent } from './Infiniteloop.component';

describe('InfiniteloopComponent', () => {
  let component: InfiniteloopComponent;
  let fixture: ComponentFixture<InfiniteloopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfiniteloopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteloopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
