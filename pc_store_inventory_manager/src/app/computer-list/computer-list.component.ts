import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ComputerService } from '../services/computer.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ComputerDTO } from '../../../models';

@Component({
  selector: 'app-computer-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './computer-list.component.html',
  styleUrl: './computer-list.component.css'
})
export class ComputerListComponent implements OnInit {
  computerService = inject(ComputerService);
  router = inject(Router);
  authService = inject(AuthService);

  computers: ComputerDTO[] = [];

  ngOnInit(): void {
    this.computerService.getAll().subscribe({
      next: computers => this.computers = computers,
      error: err => console.error(err)
    })
  }

  goToComputerForm(id: number) {
    this.router.navigate(['/computer-edit', id]);
  }

  deleteComputer(computer: ComputerDTO) {
    this.computerService.delete(computer.id).subscribe({
      next: () => {
        const index = this.computers.indexOf(computer);
        if (index > -1) {
          this.computers.splice(index, 1);
        }
      },
      error: err => console.error(err)
    });
  }
}
