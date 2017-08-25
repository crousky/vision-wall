import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-flip-tag',
  templateUrl: './flip-tag.component.html',
  styleUrls: ['./flip-tag.component.less']
})
export class FlipTagComponent implements OnInit, OnChanges {
  @Input() isPlaceholder: boolean;
  @Input() text: string;
  @Input() link: string;
  @Input() tagImage: string;
  safeTagImage: SafeHtml;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.buildTag();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.buildTag();
  }

  buildTag(): void {
    if (this.tagImage) {
      this.safeTagImage = this.sanitizer.bypassSecurityTrustHtml(this.tagImage);
    }
  }
}
