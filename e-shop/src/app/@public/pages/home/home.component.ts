import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/@graphql/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.login('sil@email.com','12345').subscribe(response => {
      console.log('%c Usuario logeado', 'color: red; font-weight: bold')
      console.trace({response});
    })
  }

}
