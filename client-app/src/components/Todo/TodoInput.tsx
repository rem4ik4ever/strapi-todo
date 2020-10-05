import React, { useState, FormEvent } from 'react';
import { useMutation } from 'urql';
import createTodo from './mutations/createTodo';

function TodoInput() {
  const [_, executeMutation] = useMutation(createTodo);
  const [body, setText] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setText(event.target.value);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    executeMutation({
      body: body.trim()
    }).then(result => {
      if(result.error){
        console.error(result.error);
      }
      console.log(result.data);
      setText('');
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="body" value={body} onChange={onChange} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default TodoInput;
