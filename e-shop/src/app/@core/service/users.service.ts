import { Injectable } from '@angular/core';
import { ApiService } from '@graphql/service/api.service';
import { Apollo } from 'apollo-angular';
import { USER_LIST_QUERY } from '@graphql/operations/queries/user';
import { map } from 'rxjs/internal/operators/map';
import { REGISTER_USER } from '@graphql/operations/mutations/user';
import { IRegisterForm } from '@core/interfaces/register.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends ApiService {

  constructor(apollo: Apollo) { 
    super(apollo); 
  }

  getUsers() {
    return this.get(USER_LIST_QUERY,{
        include: true
    }).pipe(map((result:any) => {
      return result.users;
    }));
  }

  register(user: IRegisterForm) {
    console.log('entra register');
    return this.set(REGISTER_USER,
    {
      user,
      include: false
    }).pipe(map((result: any) => {
      return result.register;
    }))
  }
}


