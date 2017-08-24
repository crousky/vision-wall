import { SafeHtml } from '@angular/platform-browser';
import { ClientSlot } from './clientSlot';

export class FlipTag implements ClientSlot {
    constructor(name: string, tagImage: SafeHtml, clientUrl: string) {
        this.type = 'flip-tag';
        this.name = name;
        this.tagImage = tagImage;
        this.clientUrl = clientUrl;
    }
    type: string;
    name: string;
    tagImage: SafeHtml;
    clientUrl: string;
}
