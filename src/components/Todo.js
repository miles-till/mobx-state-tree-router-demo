import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

class Todo extends Component {
  render() {
    const { todoStore } = this.props.rootStore;
    const todo = todoStore.findById(this.props.todoId);
    return (
      <div className="Todo">
        This is the todo page!
        <div>Id: {todo.id}</div>
        <div>Title: <input type="text" value={todo.title} onChange={e => todo.updateTitle(e.target.value)} /></div>
      </div>
    );
  }
}

export default inject('rootStore')(observer(Todo));
