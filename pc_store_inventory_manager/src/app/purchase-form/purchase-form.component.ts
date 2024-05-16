import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseService } from '../services/purchase.service';
import { ComputerDTO, CustomerDTO, PurchaseDTO } from '../../../models';
import { CustomerService } from '../services/customer.service';
import { ComputerService } from '../services/computer.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-purchase-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './purchase-form.component.html',
  styleUrl: './purchase-form.component.css'
})
export class PurchaseFormComponent implements OnInit {
  computerService = inject(ComputerService);
  purchaseService = inject(PurchaseService);
  customerService = inject(CustomerService);
  formBuilder = inject(FormBuilder);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  computers: ComputerDTO[] = [];
  selectedCustomer: CustomerDTO = {} as CustomerDTO;

  isNewPurchase = true;
  isNewCustomer = true;

  purchaseForm = this.formBuilder.group<PurchaseDTO>({
    id: 0,
    date: '',
    deliverytype: '',
    computer: null,
    customer: null,
  });

  customerForm = this.formBuilder.group<CustomerDTO>({
    id: 0,
    name: '',
    address: '',
    email: '',
  });

  ngOnInit(): void {
    this.computerService.getAll().subscribe(computers => this.computers = computers);
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.isNewPurchase = false;
      this.isNewCustomer = false;
      this.purchaseService.getOne(id).subscribe({
        next: (purchase) => this.purchaseForm.setValue(purchase),
        error: (err) => {
          console.error(err);
        }
      });
    }
  }

  async savePurchaseAndCustomer(){
    this.saveCustomer();
    this.isNewCustomer = false;
    await new Promise(resolve => setTimeout(resolve, 100));
    this.savePurchase();
  }

  savePurchase() {
    if (this.isNewPurchase) {
      this.purchaseForm.patchValue({
       customer: this.selectedCustomer,
       date: new Date().toISOString()
      });
      const purchase = this.purchaseForm.value as PurchaseDTO;
      this.purchaseService.create(purchase).subscribe({
        next: () => {
          this.router.navigateByUrl('/computer');
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
    else {
      const purchase = this.purchaseForm.value as PurchaseDTO;
      this.purchaseService.update(purchase).subscribe({
        next: () => {
          this.router.navigateByUrl('/computer');
        },
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
        next: (res) => {
          this.selectedCustomer=res;
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
    else {
    }
  }
}
