import { Component, OnInit } from '@angular/core';
import { CalculateService } from '../services/calculate.service';

import { Calculate } from '../interfaces/Calculate';
import { TotalValue } from '../interfaces/TotalValue';

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
    installments: 0,
    value: 0,
  };

  value: string =  '';
  installments: string = '';
  totalValue: TotalValue | undefined;

  ngOnInit(): void {
  }

  calculateTotalValue(): void {
    this.calculate.value = Number(this.value);
    this.calculate.installments = Number(this.installments);
    console.log(this.calculate);
    this.calculateService.calculateTotalValue(this.calculate)
      .subscribe(total => this.totalValue = total);
  }

}
