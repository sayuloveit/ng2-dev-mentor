import {Component, Output, EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'app-product-search',
    templateUrl: 'product-search.component.html'
})
export class ProductSearchComponent {
    private searchInput: FormControl = new FormControl('');

    @Output() search: EventEmitter<string> = new EventEmitter();

    constructor() {
      this.searchInput.valueChanges.subscribe((value: string) => {
          this.search.emit(value);
      });
    }
}
