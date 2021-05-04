import { Injectable } from '@angular/core';
import { Apollo  } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { LOGIN } from '@graphql/operations/queries/user';

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
      }
    }).valueChanges.pipe(map((result) => {
      return result.data;
    }));
  }
  getUsers() {}
  getMe() {}
  register() {}
}
