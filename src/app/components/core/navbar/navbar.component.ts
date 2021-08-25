import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: any;
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(<string>this.authService.getUser());
  }

  logout() {
    this.authService.logout().subscribe(res => {
      localStorage.clear();
      this.router.navigate(['login']).then(r => {
        console.log('logout success')
      }).catch(error => {
        console.log('logout error')
      })
    })
  }

}
