import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss']
})
export class ProductContainerComponent implements OnInit {

  private allProducts: IProduct[] = [
    {
      name: 'JavaScript: The Definitive Guide',
      description: `Since 1996, JavaScript: The Definitive Guide has been the bible for JavaScript programmers—a programmer's guide and comprehensive reference to the core language and to the client-side JavaScript APIs defined by web browsers.`,
      price: 28.89,
      tags: ['js', 'paperback', 'pdf', 'eBook']
    },
    {
      name: 'Eloquent JavaScript: A Modern Introduction to Programming',
      description: `JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.`,
      price: 21.22
    },
    {
      name: 'JavaScript: The Good Parts: The Good Parts',
      description: `Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code.`,
      price: 16.59,
      promoted: true
    }
  ];

  public products: IProduct[];
  public sort: ISort = {
    property: 'price',
    reverse: false
  };

  constructor() {}

  ngOnInit(): void {
    this.onFilter();
  }

  onFilter(predicate: string = ''): void {
    this.products = this.sortItems(this.filterItems(this.allProducts, predicate), this.sort);
  }

  onSort(sortBy: string) {
    this.sort.reverse = !this.sort.reverse;
    this.sort.property = sortBy;

    this.products = this.sortItems(this.products, this.sort);
  }

  private filterItems(items: IProduct[], predicate: string): IProduct[] {
    return items.filter(item => {
      const values = Object.keys(item).map(key => item[key])
        .map(String)
        .map(val => val.toLowerCase());


      return values.some(value => value.includes(predicate.toLowerCase()));
    });
  }

  private sortItems(items: IProduct[], sort: ISort): IProduct[] {

    const sortedItems = _.sortBy(items, sort.property);

    if (sort.reverse) {
      sortedItems.reverse();
    }

    return sortedItems;
  }
}