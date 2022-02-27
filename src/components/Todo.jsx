import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo, removeTodo } from "../redux/actions";

const Todo = ({ todo, toggleTodo, removeTodo }) => (
  <div className={cx(todo && todo.display && "todo-list--removed")}>
    <li className="todo-item">
      {todo && todo.completed ? "😌" : "😶"}{" "}
      <span
        className={cx(
          "todo-item__text",
          todo && todo.completed && "todo-item__text--completed"
        )}
      >
        {todo.content}
      </span>
    </li>
    <div className="todo-btns" >
      <button className="todo-btn btn-1" onClick={() => toggleTodo(todo.id)} >mark</button>
      <button className="todo-btn btn-2" onClick={() => removeTodo(todo.id)} >delete</button>
    </div>
  </div>
);

// const removeTodo = (id) => {
//   console.log(id);
//   document.getElementsByClassName('todo-list')[id].classList.add('todo-list--removed');
// }

// export default Todo;
export default connect(
  null,
  { toggleTodo, removeTodo }
)(Todo);
