import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ClientSlot } from './clientSlot';
import { FlipTag } from './flipTag';
import { Placeholder } from './placeholder';
import { Client } from '../models/client';

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

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.initRows();
    this.loadClients();
  }
  ngOnChanges() {
    this.initRows();
    this.loadClients();
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
  }
  loadClients(): void {
    if (this.clients) {
      for (let i = 0; i < this.clients.length; i++) {
        const client = this.clients[i];
        const safeImage = this.sanitizer.bypassSecurityTrustHtml(client.logoImage);
        const clientTag = new FlipTag(client.name, safeImage, client.url);
        if (i % 2 === 0) {
          this.bottomRow[(i / 2)] = clientTag;
        } else {
          this.topRow[((i + 1) / 2) - 1] = clientTag;
        }
      }
    }
  }
}
