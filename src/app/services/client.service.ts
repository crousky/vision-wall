import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Client } from '../models/client';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { environment } from '../../environments/environment';

@Injectable()
export class ClientService {
    public clientSubject: ReplaySubject<Client[]> = new ReplaySubject();

    constructor(private http: Http) { }

    public getClients(): ReplaySubject<Client[]> {
        this.http.get(environment.apiPath + 'clients')
            .subscribe(res => {
                if (res.ok) {
                    console.dir(res.json());
                    this.clientSubject.next(res.json());
                }
            });
        return this.clientSubject;
    }
}
