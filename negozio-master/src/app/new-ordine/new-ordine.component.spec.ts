import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrdineComponent } from './new-ordine.component';

describe('NewOrdineComponent', () => {
  let component: NewOrdineComponent;
  let fixture: ComponentFixture<NewOrdineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOrdineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrdineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
