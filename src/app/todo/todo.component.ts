import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

todos: Todo[] = [
  {
    task: "fold clothes",
    completed: false
  },
  {
    task: "put clothes in dresser",
    completed: false
  },
  {
    task: "relax",
    completed: false
  },
  {
    task: "try to pet cat",
    completed: true
  },
  {
    task: "pet dog",
    completed: false
  },
  {
    task: "be awesome",
    completed: false
  }
]
  searchTerm: string = ""
  constructor() { }

  ngOnInit(): void {
  }

addTodo = (form: NgForm): void => {
  let newTodo: Todo = {
    task: form.form.value.task,
    completed: form.form.value.completed === "yes"
  }
  this.todos.push(newTodo)
}

deleteTodo = (index: number): void => {
  this.todos.splice(index, 1)
}

setSearchTerm = (form: NgForm) => {
  this.searchTerm = form.form.value.term
}

filterTodos = (term: string): Todo[] => {
  return this.todos.filter((item) => {
    let currentItem = item.task.toLowerCase().trim()
    return currentItem.includes(term.toLowerCase().trim())
  })
}

setComplete = (todo: Todo): void => {
  todo.completed = true;
}
}
