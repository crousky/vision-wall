import { Component, OnInit, Input } from '@angular/core';
import { TallyCharacter } from './tally';

@Component({
  selector: 'app-tally',
  templateUrl: './tally.component.html',
  styleUrls: ['./tally.component.less']
})
export class TallyComponent implements OnInit {

  @Input() prefixSymbol: string;
  @Input() defaultValue: number;
  @Input() currentValue: number;
  tallyCharacters: TallyCharacter[];

  constructor() {
  }

  ngOnInit() {
    this.tallyCharacters = [];
    const valChars: string[] = this.defaultValue.toLocaleString().split('');
    for (let i = 0; i < valChars.length; i++) {
      const tc: TallyCharacter = {
        symbolType: valChars[i] === ',' ? 'separator' : 'background',
        value: valChars[i]
      };
      this.tallyCharacters.push(tc);
    }
    this.tallyCharacters = this.tallyCharacters.reverse();

    if (this.currentValue) {
      let currentChars: TallyCharacter[] = [];
      const currentValChars: string[] = this.currentValue.toLocaleString().split('');
      for (let i = 0; i < currentValChars.length; i++) {
        const tc: TallyCharacter = {
          symbolType: currentValChars[i] === ',' ? 'separator' : 'tag',
          value: currentValChars[i]
        };
        currentChars.push(tc);
      }
      currentChars = currentChars.reverse();
      for (let i = 0; i < currentChars.length; i++) {
        console.log(currentChars[i]);
        this.tallyCharacters[i] = currentChars[i];
      }
    }

    if (this.prefixSymbol) {
      const tc: TallyCharacter = {
        symbolType: 'prefix',
        value: this.prefixSymbol
      };
      this.tallyCharacters.push(tc);
    }
  }

}
