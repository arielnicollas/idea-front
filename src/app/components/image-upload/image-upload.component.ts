import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-image-upload',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-4 bg-white rounded-lg shadow-md">
      <h3 class="text-lg font-semibold mb-4">Upload Image</h3>
      <div class="space-y-4">
        <input
          type="file"
          (change)="onFileSelected($event)"
          accept="image/*"
          class="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-primary file:text-white
                hover:file:bg-secondary">
        <button
          *ngIf="selectedFile"
          (click)="uploadImage()"
          class="btn-primary">
          Upload
        </button>
      </div>
    </div>
  `
})
export class ImageUploadComponent {
  selectedFile: File | null = null;

  constructor(private apiService: ApiService) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadImage(): void {
    if (this.selectedFile) {
      this.apiService.uploadImage(this.selectedFile).subscribe({
        next: (response) => {
          console.log('Upload successful', response);
          this.selectedFile = null;
        },
        error: (error) => console.error('Upload failed', error)
      });
    }
  }
}