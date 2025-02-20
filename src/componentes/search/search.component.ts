import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetCarrosService } from '../../app/get-carros.service';
import { ModalSearchComponent } from '../modal-search/modal-search.component';
@Component({
  selector: 'app-search',
  imports: [
    FormsModule,
    ModalSearchComponent
  ],
  providers: [
    GetCarrosService
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  public valorInput: string = '';
  public resultado: any[] = []; 
  constructor(private getCarros: GetCarrosService) {}

  @ViewChild('modal') modal!: ModalSearchComponent;

  searchCarros(): void {
    if (this.valorInput.trim()) { // Verifica se não está vazio
      this.getCarros.searchCarros(this.valorInput).subscribe(
        (data) => {
          this.resultado = data; 
          console.log("Resultado da busca:", this.resultado);
          this.openModal();
        },
        (error) => {
          console.error("Erro ao buscar carros:", error);
        }
      );
    } else {
      console.log("Digite um valor antes de buscar!");
    }
  }

  openModal() {
    this.modal.openModal();
  }
}




