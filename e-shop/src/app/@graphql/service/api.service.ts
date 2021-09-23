import { Injectable } from '@angular/core';
import { Apollo  } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { LOGIN, USER_LIST_QUERY, ME_DATA_QUERY } from '@graphql/operations/queries/user';
import { DocumentNode } from 'graphql';
import { IRegisterForm } from '@core/interfaces/register.interface';
import { REGISTER_USER } from '@graphql/operations/mutations/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apollo: Apollo) { }

  //añadir operaciones para consumir info de la API

  protected get(query: DocumentNode,variables: object={}, context: object={}){
    return this.apollo.watchQuery({
      query,
      variables,
      context,
      fetchPolicy: 'network-only'
    }).valueChanges.pipe(map((result) => {
      return result.data;
    }));
  }

  protected set(mutation: DocumentNode, variables: object={}, context: object={}) {
    return this.apollo.mutate({
      mutation,
      variables,
      context
    }).pipe(map((result) => {
      return result.data;
    }))
  }
  
  /* register(user: IRegisterForm) {
    console.log('entra register');
    return this.apollo.mutate({
      mutation: REGISTER_USER,
      variables: {
        user,
        include: false
      }
    }).pipe(map((result) => {
      return result.data;
    }))
  } */
  
}
