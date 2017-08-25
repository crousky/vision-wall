import { Component, OnInit } from '@angular/core';
import { ImpactService } from './services/impact.service';
import { ValueService } from './services/value.service';
import { ClientService } from './services/client.service';
import { Client } from './models/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [ImpactService, ValueService, ClientService]
})
export class AppComponent implements OnInit {
  goalTarget: number;
  peopleImpacted: number;
  valueCreated: number;
  clients: Client[];

  constructor(
    private impactService: ImpactService,
    private valueService: ValueService,
    private clientService: ClientService
  ) {
    this.goalTarget = 20000000;
  }

  ngOnInit(): void {
    this.getPeopleImpacted();
    this.getValueCreated();
    this.getClients();
  }

  getPeopleImpacted(): void {
    this.impactService.getPeopleImpacted().subscribe(n => this.peopleImpacted = n);
  }
  getValueCreated(): void {
    this.valueService.getValueCreated().subscribe(n => this.valueCreated = n);
  }
  getClients(): void {
    this.clientService.getClients().subscribe(c => this.clients = c);
  }
}
