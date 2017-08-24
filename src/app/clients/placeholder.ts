import { ClientSlot } from './clientSlot';

export class Placeholder implements ClientSlot {
    constructor(name: string) {
        this.type = 'placeholder';
        this.name = name;
    }
    type: string;
    name: string;
}
