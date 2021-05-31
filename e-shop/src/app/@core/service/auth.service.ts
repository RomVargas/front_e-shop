import { Injectable } from '@angular/core';
import { ApiService } from '@graphql/service/api.service';
import { LOGIN, ME_DATA_QUERY } from '@graphql/operations/queries/user';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { ISession } from '@core/interfaces/session.interface';


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
         Authorization: (this.getSession() as ISession).token
      })
    }).pipe(map((result: any) => {
      return result.me;
    }));
  }

  setSession(token: string, expiredTime = 8){
    const date = new Date();
    console.log('%c Fecha y Hora: ', 'color: blue-light; font-weight: bold', date.toISOString());
    console.log(date.getHours() + expiredTime);

    const session: ISession = {
      expiredIn: new Date(date).toISOString(),
      token
    };
    console.log('%c Session: ', 'color: blue-light; font-weight: bold', session);
    localStorage.setItem('session', JSON.stringify(session))
  }

  getSession(){
    return JSON.parse(localStorage.getItem('session'));
  }
}

