import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private db: AngularFirestore) { }

  create(data) {
    console.log(data);
    console.log(this.db);

    return this.db.collection('users').add(data);
  }

  getById(id: string){
    return this.db.collection('users').doc(id).get();
  }
}
