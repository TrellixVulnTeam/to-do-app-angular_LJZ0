import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoToanComponent } from './todo-toan.component';

describe('TodoToanComponent', () => {
  let component: TodoToanComponent;
  let fixture: ComponentFixture<TodoToanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoToanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoToanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
