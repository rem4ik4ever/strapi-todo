import * as React from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import TodoType from "./TodoType";
import { useQuery } from "urql";
import getTodos from "./queries/getTodos";
import RemoveCompletedButton from "./RemoveCompletedButton";
import { Button } from "components/common";
import { useHistory } from "react-router-dom";

function Todos() {
  const [res, reexecuteQuery] = useQuery(getTodos);
  const history = useHistory();
  const { fetching, error, data } = res;

  if (fetching) return <div>Loading...</div>;
  if (error) return <div>Oops...</div>;

  return (
    <div className="mx-auto h-full">
      <div>
        <TodoInput refresh={reexecuteQuery} />
        <div className="container mx-auto px-2 py-2">
          {data.getTodos.length > 0 ? (
            <ul>
              {data.getTodos.map((todo: TodoType) => (
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
