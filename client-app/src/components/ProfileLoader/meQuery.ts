const query = `
  query Me {
    me {
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
`;
export default { query };
