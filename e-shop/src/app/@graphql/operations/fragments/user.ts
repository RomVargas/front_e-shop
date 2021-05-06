import gql from 'graphql-tag';

export const USER_FRAGMENT = gql`
    fragment UserObject on User{
    id
    _id
    name
    email
    password @include(if: $include)
    lastname
    role
    registerDate @include(if: $include)
    birthday @include(if: $include)
}
`;