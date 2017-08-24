import { Injectable } from '@angular/core';

@Injectable()
export class ValueService {
    getValueCreated(): number {
        return 120000;
    }
}
