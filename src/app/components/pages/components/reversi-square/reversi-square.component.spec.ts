import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReversiSquareComponent } from './reversi-square.component';

describe('ReversiSquareComponent', () => {
  let component: ReversiSquareComponent;
  let fixture: ComponentFixture<ReversiSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReversiSquareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReversiSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
