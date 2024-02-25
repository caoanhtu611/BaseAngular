import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { NgFor, NgIf } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {}
