import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
    <div class="classCounter">
      <h4>Compteur :</h4>
      <span> {{ initialValue }} </span>
      <button (click)="onClickButtonCounterPlus()">Increase</button>
      <button (click)="onClickButtoncounterMoins()">Dicrease</button>
    </div>
  `,
  styles: [
    `
      .classCounter {
        color: red;
        width: 400px;
        margin: 0 auto;
      }
      .classCounter button {
        width: 10em;
        display: inline-block;
        margin: 0 auto;
      }
    `,
  ],
})
export class CompteurComponent {
  @Input('intital-value')
  initialValue = 0;

  @Input()
  step = 1;

  onClickButtonCounterPlus() {
    this.initialValue += this.step;
  }

  onClickButtoncounterMoins() {
    this.initialValue -= this.step;
  }
}
