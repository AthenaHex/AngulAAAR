import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardOnlyCommentsComponent } from './board-only-comments.component';

describe('BoardOnlyCommentsComponent', () => {
  let component: BoardOnlyCommentsComponent;
  let fixture: ComponentFixture<BoardOnlyCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardOnlyCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardOnlyCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
