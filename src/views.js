import React from 'react';
import { View } from 'mobx-state-tree-router';
import Home from './components/Home';
import TodoList from './components/TodoList';
import Todo from './components/Todo';

const views = {
  home: View.create({
    name: 'home',
    path: '/',
    component: <Home />
  }),
  todos: View.create({
    name: 'todos',
    path: '/todos',
    component: <TodoList />
  }),
  todo: View.create({
    name: 'todo',
    path: '/todos/:todoId',
    component: <Todo />,
    hooks: {
      beforeEnter(self, params) {
        self.router.setProps({
          todoId: parseInt(params.todoId)
        });
      }
    }
  })
};

export default views;
