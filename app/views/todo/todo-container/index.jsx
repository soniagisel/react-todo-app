import React, { Component }  from 'react';
import TodoCreateItem from './todo-create-item/index.jsx';

class TodoContainer extends Component {
    render() {
        return (
            <div>
                <TodoCreateItem />
            </div>
        );
    }
}
export default TodoContainer;