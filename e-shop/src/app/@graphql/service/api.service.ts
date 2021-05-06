import { Injectable } from '@angular/core';
import { Apollo  } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { LOGIN, USER_LIST_QUERY, ME_DATA_QUERY } from '@graphql/operations/queries/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apollo: Apollo) { }

  //añadir operaciones para consumir info de la API

  login(email: string, password: string){
    return this.apollo.watchQuery({
      query: LOGIN,
      variables: {
        email,
        password
      },
      fetchPolicy: 'network-only'
    }).valueChanges.pipe(map((result) => {
      return result.data;
    }));
  }
  getUsers() {
    return this.apollo.watchQuery({
      query: USER_LIST_QUERY,
      variables: {
        include: true
      },
      fetchPolicy: 'network-only'
    }).valueChanges.pipe(map((result) => {
      return result.data;
    }));
  }
  getMe() {
    return this.apollo.watchQuery({
      query: ME_DATA_QUERY,
      variables: {
        include: false
      },
      context: {
       headers: {
         Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwOTQyZTAyNDU4NDI2NGZjYzdlZjc2MSIsImlkIjoyLCJuYW1lIjoiUm9tYW4iLCJsYXN0bmFtZSI6IlZhcmdhcyIsImVtYWlsIjoicm9tYW5AZW1haWwuY29tIiwicm9sZSI6IkFETUlOIn0sImlhdCI6MTYyMDMzMzUyOCwiZXhwIjoxNjIwNDE5OTI4fQ.xqTUrQEKpAOF9PBYnCUjAOXeterlccbY85-NLhQ0A60'
       }
      },
      fetchPolicy: 'network-only'
    }).valueChanges.pipe(map((result => {
      return result.data; 
    } )));
  }
  register() {}
}
