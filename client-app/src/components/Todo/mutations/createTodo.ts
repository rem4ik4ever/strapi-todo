const createTodo = `
  mutation CreateTodo($body: String){
    createUserTodo(input:{data: {body: $body}}){
      todo{
        id
        body
        completed
      }
    }
  }
`;

export default createTodo;
