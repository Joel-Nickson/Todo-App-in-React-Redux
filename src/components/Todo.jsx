import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo, removeTodo } from "../redux/actions";

const Todo = ({ todo, toggleTodo, removeTodo }) => (
  <li className={cx(
    "todo-item",
    todo && todo.display && "todo-list--removed"
  )}>
    {todo && todo.completed ? "👌" : "👋"}{" "}
    <span
      onClick={() => toggleTodo(todo.id)}
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}
    >
      {todo.content}
    </span>
    <button className="todo-btn" onClick={() => removeTodo(todo.id)} >delete</button>
  </li>
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
