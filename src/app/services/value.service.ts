import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable()
export class ValueService {
    public valueSubject: ReplaySubject<number> = new ReplaySubject(1);

    constructor(
        private http: Http,
        private tokenService: TokenService
    ) {}

    public getValueCreated(): ReplaySubject<number> {
        const headers = new Headers();
        const requestOptions = new RequestOptions({ headers: headers });

        headers.append('Authorization', 'Bearer ' + this.tokenService.getToken());

        this.http.get(environment.apiPath + 'value', requestOptions)
            .subscribe(res => {
                this.valueSubject.next(parseInt(res.text(), 10));
                console.log('value service returned', parseInt(res.text(), 10));
            });
        return this.valueSubject;
    }
}
