import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/alertify.service';
import { ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-member-list',
  // template: ` {{users[0].username}}`
   templateUrl: './member-list.component.html',
   styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userService: UserService,
    private alertify: AlertifyService,
    private routes: ActivatedRouteSnapshot) {}

  ngOnInit() {
    this.routes.data.subscribe(data =>{
      this.users = data['users'];
    });
  }

  // loadUsers() {
  //   this.userService.getUsers().subscribe(
  //     (users: User[]) => {
  //       this.users = users;
  //     }, 
  //     error => {
  //       this.alertify.error(error);
  //     }
  //   );
  // }
}
