import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private api =
    'https://courageous-taiyaki-0f7607.netlify.app/.netlify/functions/api/product';
}
