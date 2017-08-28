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
        const safeImage = this.sanitizer.bypassSecurityTrustHtml(client.tagImage);
        const clientTag = new FlipTag(client.name, safeImage, client.url);
        if (i % 2 === 0) {
          this.bottomRow[(i / 2)] = clientTag;
        } else {
          this.topRow[((i - 1) / 2)] = clientTag;
        }
      }
    }
  }
}
