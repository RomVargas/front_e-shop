import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/@graphql/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  token: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.login('sil@email.com','12345').subscribe(response => {
      console.log('%c Usuario logeado', 'color: orange; font-weight: bold')
      this.token = response
      console.log(response);
    });

    this.api.getUsers().subscribe(response => {
      console.log('%c usuarios de la base: ' , 'color:orange; font-weight: bold')
      console.table(response);
    });

    this.api.getMe().subscribe(response => {
      console.log('%c usuario ME: ' , 'color:orange; font-weight: bold')
      console.table(response);
    });
  }

}
