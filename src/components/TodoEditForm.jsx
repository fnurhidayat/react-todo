import style from "./TodoEditForm.module.css";

const TodoEditForm = ({ onSubmit, onTodoTextChange, text, id = 0 }) => (
  <form onSubmit={onSubmit} className={style["Todo-form"]}>
    <input
      type="text"
      onChange={onTodoTextChange}
      placeholder="Main game"
      maxLength={35}
      minLength={4}
      value={text}
    />
    <input type="submit" value="Edit Todo" />
  </form>
);

export default TodoEditForm;
