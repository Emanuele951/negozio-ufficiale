import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClientiComponent } from './list-clienti.component';

describe('ListClientiComponent', () => {
  let component: ListClientiComponent;
  let fixture: ComponentFixture<ListClientiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListClientiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
