import * as React from 'react';
import TodoType from './TodoType';
import { useMutation } from 'urql';
import updatedTodoMutation from './mutations/updateTodo';

type TodoProps = {
  todo: TodoType;
};

function TodoItem({ todo }: TodoProps) {
  const [updatedTodoResult, updateTodo] = useMutation(updatedTodoMutation);
  const handleChange = () => {
    updateTodo({ ...todo, completed: !todo.completed }).then(result => {
      if (result.error) {
        console.error(result.error);
      }
      console.log(result.data);
    });
  };
  return (
    <li>
      <div>
        {todo.body}
        <input
          type="checkbox"
          checked={todo.completed}
          disabled={updatedTodoResult.fetching}
          onChange={handleChange}
        />
      </div>
    </li>
  );
}
export default TodoItem;
