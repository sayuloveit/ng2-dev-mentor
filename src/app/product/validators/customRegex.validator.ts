import { AbstractControl, ValidatorFn } from '@angular/forms';

export function customRegexValidator(regex: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const inputValue = control.value;
    return !regex.test(inputValue) ? {'foridden': {inputValue}} : null;
  };
}
