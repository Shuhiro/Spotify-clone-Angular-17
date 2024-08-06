import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent  implements OnInit{
  
  private authService = inject(AuthService);

  errorSesion:boolean = false;
  formlogin: FormGroup = new FormGroup({});
  
  ngOnInit(): void {
    this.formlogin = new FormGroup({
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)]
      )
    })
  }

  sendLogin():void{
    const {email, password} = this.formlogin.value;
    this.authService.sendCredentials(email, password).subscribe({
      next: (responseOK) => {
        console.log('Sesión iniciada correctamente');
      },
      error: (err) => {
        this.errorSesion = true;
        console.log('Error con tu email o contraseña: ', err);
      }
    });
  }
}
