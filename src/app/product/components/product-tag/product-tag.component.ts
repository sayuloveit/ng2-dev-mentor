import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-tag',
  templateUrl: './product-tag.component.html',
  styleUrls: ['./product-tag.component.scss']
})
export class ProductTagComponent {

 @Input() tag: string;

}
