import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CustomerService } from '../services/customer.service';
import { CustomerDTO } from '../../../models';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit {
  customerService = inject(CustomerService);
  router = inject(Router);
  authService = inject(AuthService);

  customers: CustomerDTO[] = [];

  ngOnInit(): void {
    this.customerService.getAll().subscribe({
      next: customers => this.customers = customers,
      error: err => console.error(err)
    })
  }

  goToCustomerForm(id: number) {
    this.router.navigate(['/edit-customer', id]);
  }

  deleteCustomer(customer: CustomerDTO) {
    this.customerService.delete(customer.id).subscribe({
      next: () => {
        const index = this.customers.indexOf(customer);
        if (index > -1) {
          this.customers.splice(index, 1);
        }
      },
      error: err => console.error(err)
    });
  }
}
