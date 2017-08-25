import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class ImpactService {
    private impactSubject: ReplaySubject<number> = new ReplaySubject(1);

    public getPeopleImpacted(): ReplaySubject<number> {
        this.impactSubject.next(15003);
        return this.impactSubject;
    }
}
