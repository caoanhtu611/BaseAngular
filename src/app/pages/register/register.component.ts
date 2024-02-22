import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { AuthService } from '../../service/auth.service';

import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgFor, NgIf, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  userForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,

    private router: Router
  ) {
    this.userForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const formData = this.userForm.value;

      if (formData.password === formData.confirmpassword) {
        this.authService
          .SignUp({ email: formData.email, password: formData.password })
          .subscribe((data: any) => {
            if (data.status === 0) {
              alert('thank cong');
              this.userForm.reset();
              setTimeout(() => {
                this.router.navigate(['/']);
              }, 1000);
            } else {
              alert('tai kkhoan da ton tai');
            }
          });
      } else {
        alert('mat khau khong trung');
      }
    }
  }
}
