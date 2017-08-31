import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable()
export class ImpactService {
    public impactSubject: ReplaySubject<number> = new ReplaySubject(1);

    constructor(
        private http: Http,
        private tokenService: TokenService
    ) {}

    public getPeopleImpacted(): ReplaySubject<number> {
        const headers = new Headers();
        const requestOptions = new RequestOptions({ headers: headers });

        headers.append('Authorization', 'Bearer ' + this.tokenService.getToken());

        this.http.get(environment.apiPath + 'impact', requestOptions)
            .subscribe(res => {
                this.impactSubject.next(parseInt(res.text(), 10));
                console.log('impact service returned', parseInt(res.text(), 10));
            });
        return this.impactSubject;
    }
}
