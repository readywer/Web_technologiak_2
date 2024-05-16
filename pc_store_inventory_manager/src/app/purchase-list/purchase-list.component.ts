import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PurchaseService } from '../services/purchase.service';
import { PurchaseDTO } from '../../../models';

@Component({
  selector: 'app-purchase-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './purchase-list.component.html',
  styleUrl: './purchase-list.component.css'
})
export class PurchaseListComponent implements OnInit {
  purchaseService = inject(PurchaseService);
  router = inject(Router);
  authService = inject(AuthService);

  purchases: PurchaseDTO[] = [];

  ngOnInit(): void {
    this.purchaseService.getAll().subscribe({
      next: purchases => this.purchases = purchases,
      error: err => console.error(err)
    })
  }

  goToPurchaseForm(id: number) {
    this.router.navigate(['/purchase-edit', id]);
  }

  deletePurchase(purchase: PurchaseDTO) {
    this.purchaseService.delete(purchase.id).subscribe({
      next: () => {
        const index = this.purchases.indexOf(purchase);
        if (index > -1) {
          this.purchases.splice(index, 1);
        }
      },
      error: err => console.error(err)
    });
  }
}
