const createTodo = `
  mutation CreateTodo($body: String){
    createTodo(input:{data: {body: $body}}){
      todo{
        id
        body
        completed
      }
    }
  }
`;

export default createTodo;
