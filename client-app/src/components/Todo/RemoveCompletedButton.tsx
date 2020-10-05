import * as React from 'react';
import { useMutation } from 'urql';
import removeCompletedMutation from './mutations/removeCompleted';

function RemoveCompletedButton() {
  const [removeCompletedResult, removeCompleted] = useMutation(
    removeCompletedMutation
  );
  const onClick = () => {
    removeCompleted().then(result => {
      if (result.error) {
        console.error(result.error);
      }
      console.log(result.data);
    });
  };
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={removeCompletedResult.fetching}
    >
      Remove Completed
    </button>
  );
}

export default RemoveCompletedButton;
