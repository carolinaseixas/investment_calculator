import { Injectable } from "@angular/core";

import type { InvestmentData } from "./shared/models/investment-input.model";
import type { InvestmentResults } from "./shared/models/investment-results.model";

@Injectable({providedIn: 'root'})
export class InvestmentResultsService{
  investmentResults?: InvestmentResults[];

  calculateInvestmentResults(data: InvestmentData) {
    const annualData = [];
    const {initialInvestment, duration, expectedReturn, annualInvestment} = data;
    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
  
    this.investmentResults = annualData;
  }
}
