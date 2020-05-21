import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};  // object to store username and password

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  login(){
    this.authService.login(this.model).subscribe(
      next => {
      console.log('Logged is success');
      },
      error => {
      console.log('Failed to login');
      }
    );
  }

  loggedIn(){
    const token = localStorage.getItem('token');
    return !!token;  // if token empty return false if not return true
  }

  logout(){
    localStorage.removeItem('token');
    console.log('logged out');
  }

}
