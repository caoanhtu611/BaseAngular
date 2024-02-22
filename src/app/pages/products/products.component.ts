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
export class ProductsComponent {
  productList: any = [];
  userForm: FormGroup;
  productEdit: undefined;
  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {
    this.userForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      console.log(formData);
      // this.productService.addProduct(formData).subscribe((data: any) => {
      //   if (data.status === 0) {

      //     this.userForm.reset();
      //   }
      // });
    }
  }
  getAll() {
    this.productService.getProduct().subscribe((product: any) => {
      return (this.productList = product.data);
    });
  }
  ngOnInit(): void {
    this.getAll();
  }
  deleteProduct(id: string) {
    let check = confirm('do you want delete');
    if (check) {
      return this.productService.deleteProduct(id).subscribe((data: any) => {
        if (data.status === 0) {
          this.getAll();
          alert('ban da xoa thanh cong');
        }
      });
    }
    return;
  }
  handleUpdate(item: any) {
    (this.productEdit = item),
      this.userForm.patchValue({
        title: item.title,
        description: item.description,
        price: item.price,
        image: item.image,
      });
  }
}
