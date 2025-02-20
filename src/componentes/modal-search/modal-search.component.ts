import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { Modal } from 'bootstrap';


@Component({
  selector: 'app-modal-search',
  imports: [
    
  ],
  templateUrl: './modal-search.component.html',
  styleUrl: './modal-search.component.scss'
})
export class ModalSearchComponent {
  @Input() title: string = 'Título da Modal';
  @ViewChild('customModal', { static: false }) modalElement!: ElementRef;
  private modalInstance!: Modal;

  ngAfterViewInit() {
    this.modalInstance = new Modal(this.modalElement.nativeElement);
  }

  openModal() {
    this.modalInstance.show();
  }

  closeModal() {
    this.modalInstance.hide();
  }


}
