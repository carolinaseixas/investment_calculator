import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InvestmentResultsService } from '../../investment-results.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = '10000';
  annualInvestment = '0';
  expectedReturn = '1000';
  duration = '10';

  constructor(private investmentResultsService: InvestmentResultsService) {}

  onSubmit(){
    this.investmentResultsService.calculateInvestmentResults(
      {initialInvestment: +this.initialInvestment, 
        duration: +this.duration, 
        expectedReturn: +this.expectedReturn, 
        annualInvestment: +this.annualInvestment
      }
    );
  }
}
