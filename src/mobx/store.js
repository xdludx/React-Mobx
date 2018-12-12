import {observable, computed} from 'mobx';
import {observer} from 'mobx-react';

class TodoList {
    @observable todos = [];
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
}

export default TodoList;
