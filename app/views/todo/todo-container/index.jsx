import React, { Component }  from 'react';
import TodoCreateItem from './todo-create-item/index.jsx';
import TodoItemList from './todo-item-list/index.jsx';
import TodoList from './todo-list/index.jsx';

class TodoContainer extends Component {
    render() {
        return (
            <div>
                <TodoCreateItem />
                <TodoItemList />
                <TodoList />
            </div>
        );
    }
}
export default TodoContainer;
