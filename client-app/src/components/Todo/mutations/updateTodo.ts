const updateTodo = `
  mutation UpdateTodo($id: ID!, $body: String, $completed: Boolean){
    updateTodo(input:{where:{id: $id}, data: { body: $body, completed: $completed}}){
      todo{
        id
        body
        completed
      }
    }
  }
`;

export default updateTodo;
