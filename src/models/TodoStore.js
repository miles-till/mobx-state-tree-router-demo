import { types, getParent, destroy } from 'mobx-state-tree';

const Todo = types
  .model('Todo', {
    id: types.identifierNumber,
    title: 'New Todo'
  })
  .actions(self => ({
    remove() {
      getParent(getParent(self)).removeTodo(self);
    },
    updateTitle(newTitle) {
      self.title = newTitle;
    }
  }));

const TodoStore = types
  .model('TodoStore', {
    todos: types.array(Todo)
  })
  .actions(self => ({
    removeTodo(todo) {
      destroy(todo);
    },
    createTodo() {
      self.todos.push(Todo.create({
        id: self.todos
          .map(t => t.id)
          .reduce((a, b) => Math.max(a, b), 0) + 1
      }));
    },
    findById(id) {
      return self.todos.find(t => t.id === id);
    }
  }));

export { TodoStore as default, Todo };
