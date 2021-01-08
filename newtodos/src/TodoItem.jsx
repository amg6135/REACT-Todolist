import React, {Component} from "react";


class TodoItem extends Component {
    constructor(props) {
        super(props);
    }

render() {
    return (
        <div className="todo-item-container">
            {this.props.todo.item}
            <div className="btn-container">
                <button>+</button>
                <button>-</button>
            </div>
        </div>
    );
    }
}
export default TodoItem;