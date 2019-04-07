import { types } from 'mobx-state-tree';
import TodoStore from './TodoStore';
import { RouterStore } from 'mobx-state-tree-router';

const RootStore = types
  .model('RootStore', {
    todoStore: types.optional(TodoStore, {}),
    router: RouterStore
  });

export default RootStore;
