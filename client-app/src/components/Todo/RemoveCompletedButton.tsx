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
      className="bg-red-400 text-white text-lg p-2 rounded-lg hover:bg-red-500 focus:outline-none"
      type="button"
      onClick={onClick}
      disabled={removeCompletedResult.fetching}
    >
      Remove Completed
    </button>
  );
}

export default RemoveCompletedButton;
