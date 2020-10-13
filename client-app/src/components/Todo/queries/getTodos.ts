const query = `
  query getTodos{
    getTodos{
      id
      body
      completed
    }
  }
`;

const reducer = (payload: any) => payload.getTodos;

export default {
  query,
  reducer,
};
