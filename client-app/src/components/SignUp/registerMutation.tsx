const RegisterMutation = `
  mutation Register($input: UsersPermissionsRegisterInput!){
    register(input: $input){
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

export default RegisterMutation;
