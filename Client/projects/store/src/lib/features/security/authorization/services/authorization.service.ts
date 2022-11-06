import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private AUTHORIZATION_TOKEN!: string;

  constructor() { }

  get token(): string {
    return this.AUTHORIZATION_TOKEN;
  }
}
