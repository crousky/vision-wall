import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class ValueService {
    private valueSubject: ReplaySubject<number> = new ReplaySubject(1);

    public getValueCreated(): ReplaySubject<number> {
        this.valueSubject.next(120000);
        return this.valueSubject;
    }
}
