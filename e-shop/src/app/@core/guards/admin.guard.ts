import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '@core/service/auth.service';
import { IDataDecode } from '@core/interfaces/data-decode.interface';
//import {}const jwtDecode = require('jwt-decode');
import jwtDecode from "jwt-decode";
// import * as jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivateChild {
  // auth: AuthService;
  constructor(private auth: AuthService, private router: Router) { }
  
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean {
      console.log('%c Usuario logeado GUARDA', '{color:red; font-weight:bold}' );
      console.log(this.auth.getSession());
      // comprobar que existe sesion
        if(this.auth.getSession() !== null){
          console.log('%c Usuario logeado GUARDA', '{color:blue; font-weight:bold}' );
          const dataDecode = this.decodeToken();
          console.log('%c decodeToken', '{color:blue; font-weight:bold}', dataDecode.exp);
          if(dataDecode.exp < new Date().getTime() / 1000){
            console.log('%c Sesion caducda', '{color:red; font-weight:bold}' );
            return this.redirect(); 
          }
          if(dataDecode.user.role === 'ADMIN'){
            console.log('%c usuario es ADMIN', '{color: red; font-weight: bold}'); 
            return true;
          }
          console.log('%c Usuario no es ADMIN', '{color: red; font-weight: bold}');
        }
      console.log('%c Sesion no iniciada', '{color: red; font-weight: bold}');
      return this.redirect();  
  }

  redirect() {
    this.router.navigate(['/login']);
    return false;
  }
  
  decodeToken(): IDataDecode {
    console.log('%c type jwtDecode : ', '{color: red; font-weight: bold}', this.auth.getSession().token);
    const token = this.auth.getSession().token;
    return jwtDecode(token);
  }
}
