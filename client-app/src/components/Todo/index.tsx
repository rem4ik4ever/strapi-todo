import * as React from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import TodoType from './TodoType';
import { useQuery } from 'urql';
import getTodos from './queries/getTodos';
import RemoveCompletedButton from './RemoveCompletedButton';

function Todos() {
  const [res] = useQuery(getTodos);

  const { fetching, error, data } = res;

  if (fetching) return <div>Loading...</div>;
  if (error) return <div>Oops...</div>;

  return (
    <div>
      <TodoInput />
      <ul>
        {data.todos.map((todo: TodoType) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
      <RemoveCompletedButton />
    </div>
  );
}

export default Todos;
