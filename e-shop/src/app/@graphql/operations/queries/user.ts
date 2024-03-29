import gql from 'graphql-tag';
import { USER_FRAGMENT } from '@graphql/operations/fragments/user';

export const LOGIN = gql`
    query getLogin($email:String!, $password:String!, $include: Boolean!){
        login(email:$email, password:$password)
        {
            status
            message
            token
            user{
                ...UserObject
            }
        }
    }
    ${ USER_FRAGMENT }
`;

export const USER_LIST_QUERY = gql`
    query usersList($include: Boolean!){
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

export const ME_DATA_QUERY = gql`
    query meData($include: Boolean!){
        me{
            status
            message
                user{
                ...UserObject
            }
        }
    }
    ${ USER_FRAGMENT }
`;