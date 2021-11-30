import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoHuyComponent } from './todo-huy.component';

describe('TodoHuyComponent', () => {
  let component: TodoHuyComponent;
  let fixture: ComponentFixture<TodoHuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoHuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoHuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
