import { Component, EventEmitter, Output, Input } from '@angular/core';
import { PortfolioService } from 'src/app/Services/portfolio.service';
import { FireBaseService } from 'src/app/Services/fire-base.service';
import { user } from '@angular/fire/auth';

@Component({
  selector: 'app-add-portfolio-dialog',
  templateUrl: './add-portfolio-dialog.component.html',
  styleUrls: ['./add-portfolio-dialog.component.css']
})
export class AddPortfolioDialogComponent {
  @Input() isVisible: boolean = false;
  @Output() modalClosed = new EventEmitter<void>();
  portfolioName: string = '';

  constructor(private portfolioService: PortfolioService, private firebaseService: FireBaseService) {}
  
  closeModal() {
    this.isVisible = false;
    this.modalClosed.emit();
  }

  addPortfolio() {
    const userId = this.firebaseService.getUID();
    if (userId) {
      this.portfolioService.addPortfolio(this.portfolioName, userId)
        .subscribe(
          response => {
            console.log('Portfolio agregado exitosamente:', response);
            window.location.reload();
          },
          error => {
            console.error('Error al agregar el portfolio:', error);
          }
        );
      }
    
    this.isVisible = false;
    this.modalClosed.emit();
  }
}
