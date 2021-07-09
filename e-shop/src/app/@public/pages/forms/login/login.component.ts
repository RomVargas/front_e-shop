import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ILoginForm, IResultlogin } from '@core/interfaces/login.interface';
import { AuthService } from '@core/service/auth.service';
import { genericAlert } from '@shared/toasts';
import { POSITION, TYPE_ALERT } from '@shared/values.config';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  Ilogin: ILoginForm = {
    email: '',
    password: ''
  }
  constructor(private auth: AuthService,private router: Router) { }

  login() {
    console.log('%c Datos del usuario', 'color: red; font-weight: bold');
    console.log( this.Ilogin );
    this.auth.login(this.Ilogin.email, this.Ilogin.password).subscribe(
      (result: IResultlogin)=>{
        if(result.status && result.token !== null){
          console.log('%c Usuario logeado correctamente', 'color: red; font-weight: bold');
          console.log(result);
          genericAlert('SUCCESS','Usuario logeado correctamente',TYPE_ALERT.SUCCESS,'Cool!', POSITION.CENTER);
          this.auth.setSession(result.token);
          this.auth.updateSession(result);
          this.router.navigate(['/home']);
        }else{
          genericAlert('ERROR', 'No se encontro Usuario', TYPE_ALERT.ERROR, 'Error!', POSITION.CENTER);
        }
    });
  }

}


