import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './UserList.page.html',
  styleUrls: ['./UserList.page.css']
})
export class UserListPage implements OnInit {

  private items = [
    {id: 1, nome: 'Diego', email: 'diego.humberto@compila.com.br'},
    {id: 2, nome: 'Augusto', email: 'augusto.ribeiro@compila.com.br'},
    {id: 3, nome: 'Fernando', email: 'fernando.ribeiro@compila.com.br'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
