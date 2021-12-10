import TodoItem from "./TodoItem";
import style from "./TodoList.module.css";

const TodoList = ({
  todos,
  onTodoItemMark,
  onTodoItemRemove,
  onTodoItemEdit,
}) => (
  <div className={style.Todo}>
    {todos.map((i) => (
      <TodoItem
        key={i.id}
        {...i}
        onTodoItemMark={onTodoItemMark}
        onTodoItemRemove={onTodoItemRemove}
        onTodoItemEdit={onTodoItemEdit}
      />
    ))}
  </div>
);

export default TodoList;
