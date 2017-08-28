import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { environment } from '../../environments/environment';

@Injectable()
export class ValueService {
    public valueSubject: ReplaySubject<number> = new ReplaySubject(1);

    constructor(private http: Http) { }

    public getValueCreated(): ReplaySubject<number> {
        this.http.get(environment.apiPath + 'value')
            .subscribe(res => {
                this.valueSubject.next(parseInt(res.text(), 10));
                console.log('value service returned', parseInt(res.text(), 10));
            });
        return this.valueSubject;
    }
}
