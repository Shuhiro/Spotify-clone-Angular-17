import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  sendCredentials(email:String,pasword:string){
    console.log(email,pasword);
    
  }
}
