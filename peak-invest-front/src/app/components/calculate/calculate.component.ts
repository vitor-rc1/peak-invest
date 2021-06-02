import { Component, OnInit } from '@angular/core';
import { CalculateService } from '../../services/calculate.service';

import { Calculate } from '../../interfaces/Calculate';
import { TotalValue } from '../../interfaces/TotalValue';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  constructor(
    private calculateService: CalculateService
  ) { }

  calculate: Calculate = {
    installments: 1,
    value: 0,
  };
  
  totalValue: TotalValue | undefined;

  ngOnInit(): void {
  }

  calculateTotalValue(): void {
    this.calculateService.calculateTotalValue(this.calculate)
      .subscribe(total => this.totalValue = total);
  }

}
