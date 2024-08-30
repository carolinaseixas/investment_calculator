import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from "./user-input/user-input.component";
import type { InvestmentResults } from './investment-results/investment-results.model';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent]
})
export class AppComponent {
  investmentResults?: InvestmentResults[];

  saveResults(results: InvestmentResults[]){
    this.investmentResults = results;
  }
}
