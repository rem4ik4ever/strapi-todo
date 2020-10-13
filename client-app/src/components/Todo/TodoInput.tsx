import React, { useState, FormEvent } from "react";
import { useMutation } from "urql";
import createTodo from "./mutations/createTodo";

type TodoInputProps = {
  refresh: (props: any) => void;
};

function TodoInput({ refresh }: TodoInputProps) {
  const [_, executeMutation] = useMutation(createTodo);
  const [body, setText] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setText(event.target.value);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    executeMutation({
      body: body.trim(),
    }).then((result) => {
      if (result.error) {
        console.error(result.error);
      }
      console.log(result.data);
      setText("");
      refresh({ requestPolicy: "network-only" });
    });
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="">
        <div className="container mx-auto my-2 rounded-lg mx-4 flex flex-row">
          <input
            type="text"
            name="body"
            className="w-full py-2 px-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-gray-400"
            value={body}
            onChange={onChange}
            placeholder="Wash dishes..."
          />
          <button
            className="whitespace-no-wrap p-2 border-l-2 border-gray-300 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none"
            type="submit"
          >
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoInput;
