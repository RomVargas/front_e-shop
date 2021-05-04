import gql from 'graphql-tag';
import { USER_FRAGMENT } from '@graphql/operations/fragments/user';

export const LOGIN = gql`
    query getLogin($email:String!, $password:String!){
        login(email:$email, password:$password)
        {
            status
            message
            token
        }
    }
`;

export const USER_LIST_QUERY = gql`
    query {
        users {
            status
            message
            users {
            ...UserObject
            }
        }
    }
    ${ USER_FRAGMENT }
`;