import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Client } from '../models/client';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable()
export class ClientService {
    public clientSubject: ReplaySubject<Client[]> = new ReplaySubject();

    constructor(
        private http: Http,
        private tokenService: TokenService
    ) {}

    public getClients(): ReplaySubject<Client[]> {
        const headers = new Headers();
        const requestOptions = new RequestOptions({ headers: headers });

        headers.append('Authorization', 'Bearer ' + this.tokenService.getToken());

        this.http.get(environment.apiPath + 'clients', requestOptions)
            .subscribe(res => {
                if (res.ok) {
                    console.dir(res.json());
                    this.clientSubject.next(res.json());
                }
            });
        return this.clientSubject;
    }
}
