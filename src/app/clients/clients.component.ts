import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ClientSlot } from './clientSlot';
import { FlipTag } from './flipTag';
import { Placeholder } from './placeholder';
import { Client } from '../models/client';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.less']
})
export class ClientsComponent implements OnInit, OnChanges {

  @Input() totalSlots: number;
  @Input() clients: Client[];
  topRow: ClientSlot[];
  bottomRow: ClientSlot[];

  ngOnInit() {
    this.initRows();
  }
  ngOnChanges() {
    this.initRows();
  }

  initRows(): void {
    this.topRow = [];
    this.bottomRow = [];

    for (let i = 1; i <= this.totalSlots; i++) {
      if (i % 2 === 0) {
        this.topRow.push(new Placeholder(i.toString()));
      } else {
        this.bottomRow.push(new Placeholder(i.toString()));
      }
    }

    this.loadClients();

    this.topRow = this.topRow.reverse();
    this.bottomRow = this.bottomRow.reverse();
  }

  loadClients(): void {
    if (this.clients) {
      for (let i = 0; i < this.clients.length; i++) {
        const client = this.clients[i];
        const imageUrl = environment.clientImageBaseUrl + client.id + '.png';
        const clientTag = new FlipTag(client.id, client.name, imageUrl, client.url);
        if (i % 2 === 0) {
          this.bottomRow[(i / 2)] = clientTag;
        } else {
          this.topRow[((i - 1) / 2)] = clientTag;
        }
      }
    }
  }
}
