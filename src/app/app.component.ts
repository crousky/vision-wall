import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'SingleStone 2020 Vision';
  valueCreated: ValueCreated = {
    total: 120000
  };
  customersImpacted: CustomersImpacted = {
    total: 15003
  };
}

export class ValueCreated {
  total: number;
}

export class CustomersImpacted {
  total: number;
}
