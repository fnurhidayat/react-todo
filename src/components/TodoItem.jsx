const TodoItem = ({
  id,
  text,
  isDone,
  onTodoItemEdit = () => {},
  onTodoItemMark = () => {},
  onTodoItemRemove = () => {},
}) => (
  <li className={"Todo-item " + (isDone ? "Todo-done" : "Todo-active")}>
    <input
      type="checkbox"
      checked={isDone}
      onChange={() => onTodoItemMark(id)}
    />
    <button className="Todo-item" onClick={() => onTodoItemMark(id)}>
      {text}
    </button>

    <button className="Todo-destroy" onClick={() => onTodoItemRemove(id)}>
      Remove
    </button>

    <button className="Todo-edit" onClick={() => onTodoItemEdit(id, text)}>
      Edit
    </button>
  </li>
);

export default TodoItem;
