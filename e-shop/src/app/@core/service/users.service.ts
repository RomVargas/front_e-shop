import { Injectable } from '@angular/core';
import { ApiService } from '@graphql/service/api.service';
import { Apollo } from 'apollo-angular';
import { USER_LIST_QUERY } from '@graphql/operations/queries/user';
import { map } from 'rxjs/internal/operators/map';

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
}


