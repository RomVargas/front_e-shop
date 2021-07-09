import { Component, OnInit } from '@angular/core';
import { IMeData } from '@core/interfaces/session.interface';
import { AuthService } from '@core/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  session: IMeData = {
    status: false
  }
  access = false;
  role: string;
  userLabel = '';
  constructor(private auth: AuthService) {
    this.auth.accessVar$.subscribe((res) => {
      console.log('%c Status:', 'color: red; font-weight: bold', res.status);
      this.session = res;
      console.log('%c session:', 'color: red; font-weight: bold', this.session);
      this.access = this.session.status;
      this.role = this.session.user?.role;
      this.userLabel = `${ this.session.user?.name } ${this.session.user?.lastname }`
    })
   }

  ngOnInit(): void {
  }

  logout(): void {
    this.auth.resetSession();
  }

}
