import React, {Component} from "react";
import {observable, computed} from 'mobx';
import {observer} from 'mobx-react';

class TodoList {
    @observable todos = [];
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
}


@observer
class MobxTest extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.todoList.todos.map(todo =>
                        <TodoView todo={todo} key={todo.id} />
                    )}
                </ul>
                Tasks left: {this.props.todoList.unfinishedTodoCount}
            </div>
        );
    }

}

export default MobxTest;