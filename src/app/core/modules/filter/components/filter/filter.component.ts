import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FilterComponent),
      multi: true

    }
  ]
})
export class FilterComponent implements OnInit, ControlValueAccessor {

  _controlValueAccessorChangeFn: (value: any) => void =() =>{};
  _onTouched:(value: any)=> any = () => {};

  private _value!: string;
 
  public get value(): string {
    return this._value;
  }
  public set value(value: string) {
    this._value = value;
    this._propagateChanges();
  }
  constructor(private readonly _cf: ChangeDetectorRef) { }


  writeValue(newValue: string): void {
   this.value = newValue;
   this._cf.markForCheck();
  }
  registerOnChange(fn: any): void {
    this._controlValueAccessorChangeFn = fn;
  }
  registerOnTouched(fn: () => {}): void {
    this._onTouched = fn;
  }
  

  ngOnInit(): void {
  }

  _inputChange(event: any) {
    this.value = event.target.value;
  }
  _propagateChanges() {
    this._onTouched(this.value);
    this._controlValueAccessorChangeFn(this.value);
    this._cf.markForCheck();
  }


}
