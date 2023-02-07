import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReversiGameComponent } from './reversi-game.component';

describe('ReversiGameComponent', () => {
  let component: ReversiGameComponent;
  let fixture: ComponentFixture<ReversiGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReversiGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReversiGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
