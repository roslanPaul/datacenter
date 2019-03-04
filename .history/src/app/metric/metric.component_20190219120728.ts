import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css']
})
export class MetricComponent {
// tslint:disable-next-line: no-inferrable-types
  @Input() title: string = 'CPU';
// tslint:disable-next-line: no-inferrable-types
  @Input() description: string = '';
// tslint:disable-next-line: no-inferrable-types
  private _value: number = 0;
// tslint:disable-next-line: no-inferrable-types
  private _max: number = 100;

  @Input('used')
  set value(value: number) {
    if (isNaN(value)) {
      value = 0;
    }
    this._value = value;
  }

  get value(): number {
    return this._value;
  }

  @Input('available')
  set max(max: number) {
    if (isNaN(max)) {
      max = 100;
    }
    this._max = max;
  }

  get max(): number {
    return this._max;
  }

  isDanger() {
    return this.value / this.max > 0.7;
  }
}
