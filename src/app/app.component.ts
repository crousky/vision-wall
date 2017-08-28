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
    this.impactService.impactSubject.subscribe(n => this.peopleImpacted = n);
    this.impactService.getPeopleImpacted();
  }
  getValueCreated(): void {
    this.valueService.valueSubject.subscribe(n => this.valueCreated = n);
    this.valueService.getValueCreated();
  }
  getClients(): void {
    this.clientService.clientSubject.subscribe(c => this.clients = c);
    this.clientService.getClients();
  }
}
