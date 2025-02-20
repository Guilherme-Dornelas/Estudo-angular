import { Component, ViewChild } from '@angular/core';
import { GetCarrosService } from '../../app/get-carros.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { ModalSearchComponent } from '../modal-search/modal-search.component';
@Component({
  selector: 'app-carros',
  standalone: true,
  imports: [
    HttpClientModule, 
    CommonModule,
    SearchComponent,
    ModalSearchComponent
  ],
  providers: [
    GetCarrosService
  ],
  templateUrl: './carros.component.html',
  styleUrl: './carros.component.scss'
})
export class CarrosComponent {

  constructor(private getCarrosService: GetCarrosService) {}

  carros: any[] = [];

  ngOnInit(): void {
    this.getCarrosService.getCarros().subscribe((data: any[]) => {
      this.carros = data;
    });

  }
}
