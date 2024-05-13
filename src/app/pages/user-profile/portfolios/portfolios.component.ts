import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {ActivatorComponentsService} from "../../../Services/activator-components.service";
import { FireBaseService } from 'src/app/Services/fire-base.service';
import { PortfolioService } from 'src/app/Services/portfolio.service';
import { user } from '@angular/fire/auth';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.css']
})
export class PortfoliosComponent implements OnInit {
  portfolios: any[] = [];
  @ViewChild('PortfolioView') PortfolioViewRef!: ElementRef;
  constructor(private activatorService: ActivatorComponentsService, private firebaseService: FireBaseService, private portfolioService: PortfolioService) {
  }

  ngOnInit(): void {
    const userId = this.firebaseService.getUID();
    if (userId) {
      this.portfolioService.getPortfolios(userId).subscribe((data: any) => {
        this.portfolios = data;
      });
    }
  }

  modalVisible: boolean = false;

  openModal() {
    this.modalVisible = true;
  }

  onModalClosed() {
    this.modalVisible = false;
  }


  getPortfolioActivator(){
    return this.activatorService.getPortfolioListActivator();
  }

  PortfolioListActivate(){
    this.activatorService.setPortfolioListActivator();
  }

}
