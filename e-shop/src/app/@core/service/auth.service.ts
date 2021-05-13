import { Injectable } from '@angular/core';
import { ApiService } from '@graphql/service/api.service';
import { LOGIN, ME_DATA_QUERY } from '@graphql/operations/queries/user';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {

  constructor(apollo: Apollo) {
    super(apollo);
   }

  login(email: string, password: string){
    return this.get(LOGIN, {email, password}).pipe(
      map( (result: any) => {
        return result.login;
      }))
  }

  getMe() {
    return this.get( ME_DATA_QUERY, {
      include: false
    },
    {  
      headers: new HttpHeaders ({
         Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwOTQyZTAyNDU4NDI2NGZjYzdlZjc2MSIsImlkIjoyLCJuYW1lIjoiUm9tYW4iLCJsYXN0bmFtZSI6IlZhcmdhcyIsImVtYWlsIjoicm9tYW5AZW1haWwuY29tIiwicm9sZSI6IkFETUlOIn0sImlhdCI6MTYyMDg3MjE0OCwiZXhwIjoxNjIwOTU4NTQ4fQ.U0iCYI8lcvvlj96rmlrWpqabJKLNHB8KIqbRApaRSnA'
      })
    }).pipe(map((result: any) => {
      return result.me;
    }));
  }
}

