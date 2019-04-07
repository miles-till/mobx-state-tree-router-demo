import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { RouterStore, startRouter } from 'mobx-state-tree-router';
import App from './components/App';
import RootStore from './models/RootStore';
import TodoStore from './models/TodoStore';
import views from './views';

const rootStore = RootStore.create({
  todoStore: TodoStore.create({
    todos: [{
      id: 0,
      title: 'Todo 1'
    }, {
      id: 1,
      title: 'Todo 2'
    }]
  }),
  router: RouterStore.create({
    views: views
  })
});

startRouter(rootStore.router);

ReactDOM.render((
  <Provider rootStore={rootStore}>
    <App />
  </Provider>
  ),
  document.getElementById('root'));
