import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InvestmentResultsService } from '../investment-results/investment-results.service';
import { type InvestmentResults } from '../investment-results/investment-results.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = 10000;
  annualInvestment = 0;
  expectedReturn = 1000;
  duration = 10;
  investmentResults = output<InvestmentResults[]>();

  constructor(private investmentResultsService: InvestmentResultsService) {}

  onSubmit(){
    this.investmentResults.emit(this.investmentResultsService.calculateInvestmentResults(
      this.initialInvestment, this.duration, this.expectedReturn, this.annualInvestment
    ));
  }

  console(message: any){
    console.log(message);
  }
}
