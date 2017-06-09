import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

import { customRegexValidator } from '../../validators/customRegex.validator';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  @Output() orderData: EventEmitter<IOrder> = new EventEmitter();

  public form: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.form = this._fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        address: ['', Validators.required],
        email: ['', [Validators.required, customRegexValidator(/(.+)@(.+){2,}\.(.+){2,}/)]],
        productName: ['', Validators.required],
        productCount: [1, [Validators.required, customRegexValidator(/^\d+$/)]]
      });
  }

    onSubmit() {
      this.orderData.emit(this.form.value);
    }

}
