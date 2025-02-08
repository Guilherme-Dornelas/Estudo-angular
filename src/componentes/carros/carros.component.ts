import { Component } from '@angular/core';
import { GetCarrosService } from '../../app/get-carros.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-carros',
  standalone: true,
  imports: [
    HttpClientModule, 
    CommonModule],
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

      console.log(this.carros);
    });



  }
}
