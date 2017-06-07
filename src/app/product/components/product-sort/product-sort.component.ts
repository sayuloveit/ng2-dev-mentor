import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-product-sort',
  templateUrl: './product-sort.component.html',
  styleUrls: ['./product-sort.component.scss']
})

export class ProductSortComponent {
  @Input() property: string;
  @Input() sort: ISort;

  @Output() sortChange: EventEmitter<string> = new EventEmitter();

  onClick() {
    this.sortChange.emit(this.property);
  }
}
