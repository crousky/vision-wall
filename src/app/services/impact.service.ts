import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { environment } from '../../environments/environment';

@Injectable()
export class ImpactService {
    public impactSubject: ReplaySubject<number> = new ReplaySubject(1);

    constructor(private http: Http) { }

    public getPeopleImpacted(): ReplaySubject<number> {
        this.http.get(environment.apiPath + 'impact')
            .subscribe(res => {
                this.impactSubject.next(parseInt(res.text(), 10));
                console.log('impact service returned', parseInt(res.text(), 10));
            });
        return this.impactSubject;
    }
}
