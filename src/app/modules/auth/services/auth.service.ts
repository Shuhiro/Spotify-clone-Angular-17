import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL = environment.api;
  private http = inject(HttpClient);
  private cookie = inject(CookieService);

  constructor() { }

  sendCredentials(email:String,password:string): Observable<any>{
    const body = {
      email,
      password
    }
    return this.http.post(`${this.URL}/auth/login`,body)
    //Cookie del lado del servidor
    // .pipe(
    //   tap((responseOk:any)=> {
    //     const {tokenSession,data} = responseOk;
    //     this.cookie.set('token_servicio', tokenSession, 4,'/');
    //   })
    // )
  }
}
