import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/Users.service';

@Component({
  selector: 'app-user',
  templateUrl: './User.page.html',
  styleUrls: ['./User.page.css']
})
export class UserPage implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  private loading: Boolean = false;

  createUser() {
    this.loading = true;
    this.userService.create({
      name: 'Diego',
      email: 'diego.humberto@compila.com.br',
      age: 29,
      phone: '5599384938423'
    }).then((data) => {
      console.log(data);
      this.loading = false;
    }).catch((error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
