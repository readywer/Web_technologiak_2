import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseService } from '../services/purchase.service';
import { PurchaseDTO } from '../../../models';

@Component({
  selector: 'app-purchase-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './purchase-form.component.html',
  styleUrl: './purchase-form.component.css'
})
export class PurchaseFormComponent implements OnInit {
  purchaseService = inject(PurchaseService);
  formBuilder = inject(FormBuilder);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  isNewPurchase = true;

  purchaseForm = this.formBuilder.group<PurchaseDTO>({
    id: 0,
    date: '',
    deliverytype: '',
    computer: null,
    customer: null
  });

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.isNewPurchase = false;
      this.purchaseService.getOne(id).subscribe({
        next: (purchase) => this.purchaseForm.setValue(purchase),
        error: (err) => {
          console.error(err);
        }
      });
    }
  }

  savePurchase() {
    const purchase = this.purchaseForm.value as PurchaseDTO;

    if (this.isNewPurchase) {
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
}
