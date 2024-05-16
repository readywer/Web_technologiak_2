import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComputerService } from '../services/computer.service';
import { ComputerDTO } from '../../../models';

@Component({
  selector: 'app-computer-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './computer-form.component.html',
  styleUrl: './computer-form.component.css'
})
export class ComputerFormComponent implements OnInit {
  computerService = inject(ComputerService);
  formBuilder = inject(FormBuilder);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  isNewComputer = true;

  computerForm = this.formBuilder.group<ComputerDTO>({
    id: 0,
    name: '',
    price: 0,
    cpu: '',
    cooler: '',
    mobo: '',
    ram: '',
    gpu: '',
    psu: '',
    case: ''
  });

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.isNewComputer = false;
      this.computerService.getOne(id).subscribe({
        next: (computer) => this.computerForm.setValue(computer),
        error: (err) => {
          console.error(err);
        }
      });
    }
  }

  saveComputer() {
    const computer = this.computerForm.value as ComputerDTO;

    if (this.isNewComputer) {
      this.computerService.create(computer).subscribe({
        next: () => {
          this.router.navigateByUrl('/computer');
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
    else {
      this.computerService.update(computer).subscribe({
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
