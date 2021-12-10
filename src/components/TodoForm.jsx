import style from "./TodoForm.module.css";

const TodoForm = ({ onSubmit, onTodoTextChange, text }) => (
  <form onSubmit={onSubmit} className={style["Todo-form"]}>
    <input
      type="text"
      onChange={onTodoTextChange}
      placeholder="Main game"
      value={text}
      maxLength={35}
      minLength={4}
    />
    <input type="submit" value="Add Todo" />
  </form>
);

export default TodoForm;
