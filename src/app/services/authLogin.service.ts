import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {
  private _email: string = '';
  private _password: string = '';

  constructor() {
    // Recuperar datos al iniciar el servicio
    this._email = localStorage.getItem('email') || '';
    this._password = localStorage.getItem('password') || '';
  }

  set email(value: string) {
    this._email = value;
    localStorage.setItem('email', value);
  }
  get email(): string {
    return this._email;
  }

  set password(value: string) {
    this._password = value;
    localStorage.setItem('password', value);
  }
  get password(): string {
    return this._password;
  }
}