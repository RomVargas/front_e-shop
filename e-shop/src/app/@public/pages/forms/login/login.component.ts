import { Component, OnInit } from '@angular/core';
import { ILoginForm, IResultlogin } from '@core/interfaces/login.interface';
import { AuthService } from '@core/service/auth.service';
import { errorAlert } from '@shared/toasts';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: ILoginForm = {
    email: '',
    password: ''
  }
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  init() {
    console.log('%c Datos del usuario', 'color: red; font-weight: bold');
    console.log( this.login );
    this.auth.login(this.login.email, this.login.password).subscribe(
      (result: IResultlogin)=>{
        if(result.status && result.token !== null){
          console.log('%c Usuario logeado correctamente', 'color: red; font-weight: bold');
          console.log(result);
        }else{
          errorAlert('Error en Login', 'No se encontro Usuario', '');
        }
    });
  }

}


