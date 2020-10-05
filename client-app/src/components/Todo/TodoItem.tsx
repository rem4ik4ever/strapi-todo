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
      <div className="">
        <label className="flex items-center">
          <input
            type="checkbox"
            name={`checkbox-${todo.id}`}
            className="w-5 h-5 m-1"
            checked={todo.completed}
            disabled={updatedTodoResult.fetching}
            onChange={handleChange}
          />
          <span className="text-lg">{todo.body}</span>
        </label>
      </div>
    </li>
  );
}
export default TodoItem;
