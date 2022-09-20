import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrdiniComponent } from './list-ordini.component';

describe('ListOrdiniComponent', () => {
  let component: ListOrdiniComponent;
  let fixture: ComponentFixture<ListOrdiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOrdiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrdiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
