import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardCommentsComponent } from './board-comments.component';

describe('BoardCommentsComponent', () => {
  let component: BoardCommentsComponent;
  let fixture: ComponentFixture<BoardCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
