import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/service/auth.service';
import { genericAlert } from '@shared/toasts';
import { POSITION, TYPE_ALERT } from '@shared/values.config';
import { IRegisterForm, IResultRegister } from '@core/interfaces/register.interface';
import { ApiService } from '@graphql/service/api.service';
import { UsersService } from '@core/service/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  Iregister: IRegisterForm = {
    email: '',
    password: '',
    name: '',
    lastname: '',
    birthday: '',
    id: 0,
    role: '',
  }
  constructor(private router: Router, private api: UsersService) { }

  

  register() {
    const password2 = (<HTMLInputElement>document.getElementById('password2')).value;
    console.log('%c Registrando ususario', 'color: black; font-weight: bold; font-size: 38px;');
    console.log('%c','color: black; font-weight: bold; font-size: 38px;', this.Iregister);
    console.log('%c','color: black; font-weight: bold; font-size: 38px;', this.Iregister.password);
    console.log('%c','color: black; font-weight: bold; font-size: 38px;', password2);
    if(this.Iregister.password !== password2){
      genericAlert('ERROR','Las contraseñas no coinciden, favor de verificar!',TYPE_ALERT.ERROR,'error!', POSITION.CENTER);
      return;
    }if(this.Iregister.birthday === null || this.Iregister.birthday === ''){
      genericAlert('ERROR','favor de introducir Fecha de nacimiento!',TYPE_ALERT.ERROR,'error!', POSITION.CENTER);
      return;
    }else{
      try {
        this.Iregister.id = 123;
        this.Iregister.role = 'ADMIN';
        this.api.register(
          this.Iregister
        ).subscribe((result) => {
          console.log('%c Result: ', 'color:greenyellow; font-size:20px', result);
        })
      } catch (error) {
        genericAlert('ERROR',error,TYPE_ALERT.ERROR,'error!', POSITION.CENTER);
        return;
      }
    }
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    console.log('%c registro dato de evento: ', 'color:red; font-weight: bold;' );
    const data = new Date();
    data.setFullYear(data.getFullYear() - 18);
    this.Iregister.birthday = (data.toISOString().substring(0,10));
  }

  private formatNumber(num: number | string){
    return (+num < 10) ? `0${num}` : num;
  }

  dateAsign($event) {
    console.log('%c registro dato de evento2: ', 'color:green ; font-weight: bold;', $event );
    const fecha = `${$event.year}-${this.formatNumber($event.month)}-${this.formatNumber($event.day)}`;
    this.Iregister.birthday = fecha;
  }

}
