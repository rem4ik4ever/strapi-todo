import * as React from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import TodoType from './TodoType';
import { useQuery } from 'urql';
import getTodos from './queries/getTodos';
import RemoveCompletedButton from './RemoveCompletedButton';

const Header = () => (
  <div className="shadow-sm border-b-2 border-gray-200 mb-2">
    <h1 className="text-center text-2xl">Todos</h1>
  </div>
);

function Todos() {
  const [res] = useQuery(getTodos);

  const { fetching, error, data } = res;

  if (fetching) return <div>Loading...</div>;
  if (error) return <div>Oops...</div>;

  return (
    <div className="mx-auto h-full">
      <Header />
      <div>
        <TodoInput />
        <div className="container mx-auto px-2 py-2">
          {data.todos.length > 0 ? (
            <ul>
              {data.todos.map((todo: TodoType) => (
                <TodoItem todo={todo} key={todo.id} />
              ))}
            </ul>
          ) : (
            <div>No Todo items found...</div>
          )}
        </div>
        <div className="container mx-auto">
          <RemoveCompletedButton />
        </div>
      </div>
    </div>
  );
}

export default Todos;
