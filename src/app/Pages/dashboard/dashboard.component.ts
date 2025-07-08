import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { Supplier } from '../../models/supplier.model';
import { ProductService } from '../../services/product.service';
import { SupplierService } from '../../services/suppleir.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  showProducts = false;
  showSuppliers = false;

  products: Product[] = [];
  suppliers: Supplier[] = [];

  constructor(
    private productService: ProductService,
    private supplierService: SupplierService
  ) {}

  toggleProducts() {
    this.showProducts = !this.showProducts;
    if (this.showProducts) {
      this.productService.getAll().subscribe(data => this.products = data);
      this.showSuppliers = false;
    }
  }

  toggleSuppliers() {
    this.showSuppliers = !this.showSuppliers;
    if (this.showSuppliers) {
      this.supplierService.getAll().subscribe(data => this.suppliers = data);
      this.showProducts = false;
    }
  }
}
