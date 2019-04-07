import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import views from '../views';

class TodoList extends Component {
  render() {
    const { todoStore } = this.props.rootStore;
    const { router } = this.props.rootStore;
    return (
      <div className="TodoList">
        This is the todo list page!
        <ul>
          {todoStore.todos.map(t => (
            <li key={t.id}>
              {`${t.id}: ${t.title}`}
              <button onClick={() => router.setView(views.todo, { todoId: t.id })}>open</button>
              <button onClick={t.remove}>x</button>
            </li>
            ))}
        </ul>
        <button onClick={todoStore.createTodo}>Create Todo</button>
      </div>
    );
  }
}

export default inject('rootStore')(observer(TodoList));
