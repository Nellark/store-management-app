import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  product: Product = {
    name: '',
    price: 0,
    quantity: 0,
    supplierId: 0,
    category: ''
  };

  message = '';
isEditMode: any;

  constructor(private productService: ProductService, private router: Router) {}

  submitForm() {
    this.productService.create(this.product).subscribe(() => {
      this.message = '✅ Product added!';
      // Optionally redirect after a short delay
      setTimeout(() => this.router.navigate(['/products']), 1500);
    });
  }
}



