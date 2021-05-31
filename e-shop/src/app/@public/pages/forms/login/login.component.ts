import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILoginForm, IResultlogin } from '@core/interfaces/login.interface';
import { IMeData } from '@core/interfaces/session.interface';
import { AuthService } from '@core/service/auth.service';
import { errorAlert, genericAlert } from '@shared/toasts';
import { POSITION, TYPE_ALERT } from '@shared/values.config';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  Ilogin: ILoginForm = {
    email: '',
    password: ''
  }
  constructor(private auth: AuthService,private router: Router) { }

  ngOnInit(): void {
    if(this.auth.getSession() !== null){
      this.auth.getMe().subscribe((res: IMeData) => {
        if(!res.status){
          localStorage.ressetItem('session');
        }
      });
      console.log('%c Sesion iniciada', 'color: red; font-weight: bold');
      return;
    }
    console.log('%c Sesion no iniciada', 'color: red; font-weight: bold');
  }

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
          this.router.navigate(['/home']);
        }else{
          genericAlert('ERROR', 'No se encontro Usuario', TYPE_ALERT.ERROR, 'Error!', POSITION.CENTER);
        }
    });
  }

}


