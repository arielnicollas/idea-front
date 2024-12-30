import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OfferService } from '../../services/offer.service';

@Component({
  selector: 'app-offer-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="offerForm" (ngSubmit)="onSubmit()" class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-6 text-primary">Create New Offer</h2>
      
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Title</label>
          <input 
            type="text" 
            formControlName="titulo"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Description</label>
          <textarea 
            formControlName="descricao"
            rows="3"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"></textarea>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Store</label>
          <input 
            type="text" 
            formControlName="loja_associada"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Categoria</label>
          <select 
            formControlName="categoria"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
            <option value="technology">Technology</option>
            <option value="food">Food</option>
            <option value="clothing">Clothing</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Affiliate Link</label>
          <input 
            type="url" 
            formControlName="link_afiliado"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Expiration Date</label>
          <input 
            type="date" 
            formControlName="data_expiracao"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Image</label>
          <input 
            type="file" 
            (change)="onFileSelected($event)"
            accept="image/*"
            class="mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-primary file:text-white
                  hover:file:bg-secondary">
        </div>

        <button 
          type="submit"
          [disabled]="offerForm.invalid || !selectedFile"
          class="w-full btn-primary disabled:opacity-50">
          Create Offer
        </button>
      </div>
    </form>
  `
})
export class OfferFormComponent {
  offerForm: FormGroup;
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private offerService: OfferService
  ) {
    this.offerForm = this.fb.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      link_afiliado: ['', Validators.required],
      data_expiracao: ['', Validators.required],
      loja_associada: ['', Validators.required],
      categoria: ['', [Validators.required]]
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(): void {
    if (this.offerForm.valid && this.selectedFile) {
      const formData = new FormData();
      
      formData.append('imagem', this.selectedFile);

      console.log(this.offerForm.getRawValue())
      
      // Append form values
      Object.keys(this.offerForm.value).forEach(key => {
        formData.append(key, this.offerForm.value[key]);
      });

      this.offerService.createOffer(this.offerForm.value).subscribe({
        next: () => {
          this.offerForm.reset();
          this.selectedFile = null;
        },
        error: (error) => console.error('Error creating offer:', error)
      });
    }
  }
}