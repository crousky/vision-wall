import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class ClientService {
    private clientSubject: ReplaySubject<Client[]> = new ReplaySubject();

    hammerSvg: string = '<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1771 1536q0 53-37 90l-107 108q-39 37-91 37-53 0-90-37l-363-364q-38-36-38-90 0-53 43-96l-256-256-126 126q-14 14-34 14t-34-14q2 2 12.5 12t12.5 13 10 11.5 10 13.5 6 13.5 5.5 16.5 1.5 18q0 38-28 68-3 3-16.5 18t-19 20.5-18.5 16.5-22 15.5-22 9-26 4.5q-40 0-68-28l-408-408q-28-28-28-68 0-13 4.5-26t9-22 15.5-22 16.5-18.5 20.5-19 18-16.5q30-28 68-28 10 0 18 1.5t16.5 5.5 13.5 6 13.5 10 11.5 10 13 12.5 12 12.5q-14-14-14-34t14-34l348-348q14-14 34-14t34 14q-2-2-12.5-12t-12.5-13-10-11.5-10-13.5-6-13.5-5.5-16.5-1.5-18q0-38 28-68 3-3 16.5-18t19-20.5 18.5-16.5 22-15.5 22-9 26-4.5q40 0 68 28l408 408q28 28 28 68 0 13-4.5 26t-9 22-15.5 22-16.5 18.5-20.5 19-18 16.5q-30 28-68 28-10 0-18-1.5t-16.5-5.5-13.5-6-13.5-10-11.5-10-13-12.5-12-12.5q14 14 14 34t-14 34l-126 126 256 256q43-43 96-43 52 0 91 37l363 363q37 39 37 91z"/></svg>';
    CLIENTS: Client[] = [
        { id: 1, name: 'HAMMER', logoImage: this.hammerSvg, url: 'http://singlestoneconsulting.com', month: 2, year: 2017 },
        { id: 2, name: 'MALLET', logoImage: this.hammerSvg, url: 'http://carmaxauctions.com', month: 2, year: 2017 },
        { id: 3, name: 'HAMMER', logoImage: this.hammerSvg, url: 'http://singlestoneconsulting.com', month: 2, year: 2017 },
        { id: 4, name: 'MALLET', logoImage: this.hammerSvg, url: 'http://carmaxauctions.com', month: 2, year: 2017 }
    ];
    public getClients(): ReplaySubject<Client[]> {
        this.clientSubject.next(this.CLIENTS);
        return this.clientSubject;
    }
}
