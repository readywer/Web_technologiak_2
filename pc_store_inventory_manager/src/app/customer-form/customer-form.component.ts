import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import { CustomerDTO } from '../../../models';

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent implements OnInit {
  customerService = inject(CustomerService);
  formBuilder = inject(FormBuilder);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  isNewCustomer = true;

  customerForm = this.formBuilder.group<CustomerDTO>({
    id: 0,
    name: '',
    address: '',
    email: ''
  });

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.isNewCustomer = false;
      this.customerService.getOne(id).subscribe({
        next: (customer) => this.customerForm.setValue(customer),
        error: (err) => {
          console.error(err);
        }
      });
    }
  }

  saveCustomer() {
    const customer = this.customerForm.value as CustomerDTO;

    if (this.isNewCustomer) {
      this.customerService.create(customer).subscribe({
        next: () => {
          this.router.navigateByUrl('/customer');
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
    else {
      this.customerService.update(customer).subscribe({
        next: () => {
          this.router.navigateByUrl('/customer');
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
  }
}
