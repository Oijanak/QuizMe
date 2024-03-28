import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CategoryService } from '../services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css',
})
export class AddCategoryComponent {
  category = {
    title: '',
    description: '',
  };
  constructor(
    private categoryService: CategoryService,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}
  addCategory() {
    if (!(this.category.title || this.category.description)) {
      this.snackbar.open('Title and description required Required', '', {
        duration: 3000,
      });
      return;
    }
    this.categoryService.addCategory(this.category).subscribe({
      next: (data) => {
        console.log('Submitted', data);
        this.snackbar.open('Added Successfully', '', {
          duration: 3000,
        });
        this.router.navigateByUrl('admin/categories');
      },
      error: (error) => {
        Swal.fire('Server Error', error);
      },
    });
  }
}
