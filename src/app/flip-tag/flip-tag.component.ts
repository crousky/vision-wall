import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flip-tag',
  templateUrl: './flip-tag.component.html',
  styleUrls: ['./flip-tag.component.less']
})
export class FlipTagComponent {
  @Input() id: string;
  @Input() isPlaceholder: boolean;
  @Input() text: string;
  @Input() link: string;
  @Input() tagImage: string;
}
