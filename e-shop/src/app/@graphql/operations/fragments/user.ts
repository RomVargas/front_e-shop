import gql from 'graphql-tag';

export const USER_FRAGMENT = gql`
    fragment UserObject on User{
    id
    _id
    name
    email
    password
    lastname
    role
    registerDate
    birthday
}
`;