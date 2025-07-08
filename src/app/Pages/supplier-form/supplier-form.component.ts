import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Supplier } from '../../models/supplier.model';
import { SupplierService } from '../../services/suppleir.service';

@Component({
  selector: 'app-supplier-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './supplier-form.component.html',
  styleUrl: './supplier-form.component.css'
})

export class SupplierFormComponent implements OnInit {
  supplier: Supplier = {
    name: '',
    email: '',
    phone: ''
  };

  isEditMode = false;

  constructor(
    private supplierService: SupplierService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.supplierService.get(+id).subscribe((data: Supplier) => this.supplier = data);
    }
  }

  submitForm() {
    if (this.isEditMode && this.supplier.id) {
      this.supplierService.update(this.supplier.id, this.supplier).subscribe(() => {
        this.router.navigate(['/suppliers']);
      });
    } else {
      this.supplierService.create(this.supplier).subscribe(() => {
        this.router.navigate(['/suppliers']);
      });
    }
  }
}
