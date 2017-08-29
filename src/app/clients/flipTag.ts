import { SafeHtml } from '@angular/platform-browser';
import { ClientSlot } from './clientSlot';

export class FlipTag implements ClientSlot {
    constructor(id: string, name: string, tagImage: string, clientUrl: string) {
        this.type = 'flip-tag';
        this.id = id;
        this.name = name;
        this.tagImage = tagImage;
        this.clientUrl = clientUrl;
    }
    type: string;
    id: string;
    name: string;
    tagImage: string;
    clientUrl: string;
}
