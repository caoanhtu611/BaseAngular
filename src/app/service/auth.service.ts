import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private api =
    'https://courageous-taiyaki-0f7607.netlify.app/.netlify/functions/api/auth';
}
