const loginMutation = `
  mutation Login($input: UsersPermissionsLoginInput!){
    login(input: $input){
      jwt,
      user{
        id
        username
        email
        confirmed
        role{
          name
          id
        }
      }
    }
  }
`;

export default loginMutation;
