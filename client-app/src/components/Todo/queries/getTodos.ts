const query = `
  query Todos{
    todos(sort: "id"){
      id
      body
      completed
    }
  }
`

const reducer = (payload:any) => payload.todos

export default {
  query,
  reducer
}
