import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../environments/environment';

import { HeaderComponent } from './components/Header/Header.component';
import { LoadingComponent } from './components/Loading/Loading.component'
import { UserListPage } from './pages/UserList/UserList.page';
import { UserPage } from './pages/User/User.page';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListPage,
    UserPage,
    LoadingComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
