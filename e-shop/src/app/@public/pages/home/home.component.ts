import { Component, OnInit } from '@angular/core';
import { ApiService } from '@graphql/service/api.service';
import { AuthService } from '@core/service/auth.service';
import { UsersService } from '@core/service/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  token: any;
  constructor(private api: ApiService, private auth: AuthService,
              private users: UsersService) { }

  ngOnInit(): void {
    /*this.auth.login('roman@email.com','12345').subscribe(response => {
      console.log('%c Usuario logeado', 'color: orange; font-weight: bold')
      this.token = response
      console.log(response);
    });

    this.users.getUsers().subscribe(response => {
      console.log('%c usuarios de la base: ' , 'color:orange; font-weight: bold')
      console.table(response);
    });

    this.auth.getMe().subscribe(response => {
      console.log('%c usuario ME: ' , 'color:orange; font-weight: bold')
      console.table(response);
    });*/
  }

}
