import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { PurchaseDTO } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  http = inject(HttpClient);

  getAll() {
    return this.http.get<PurchaseDTO[]>('/api/purchase');
  };

  getOne(id: number) {
    return this.http.get<PurchaseDTO>('/api/purchase/' + id);
  };

  create(purchase: PurchaseDTO) {
    return this.http.post<PurchaseDTO>('/api/purchase', purchase);
  };

  update(purchase: PurchaseDTO) {
    return this.http.put<PurchaseDTO>('/api/purchase', purchase);
  };

  delete(id: number) {
    return this.http.delete('/api/purchase/' + id);
  };
}
