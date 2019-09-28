
import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
    // The 'implements OnInit' part is not necessary to get this to work. It just allows IDE help

    pageTitle = 'The Best Product List';
    showImageColumn = true;
    productImageWidth = 50;

    _listFilter: string;

    get listFilter(): string{
      return this._listFilter;
    }
    set listFilter(value){
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFiler(this.listFilter) : this.products;
    }

    filteredProducts: Product[];
    // 'any' is a type when we don't know or care what the specific type is
    // products: any[] = [
    products: Product[] = [
      new Product(1, 'Leaf Rake', 'GDN-0011', 'March 19, 2020',
        'Leaf rake with 48-inch wooden handle.', 19.95, 3.2, 'assets/images/leaf_rake.png'),
      new Product(2, 'Garden Cart', 'GDN-0023', 'March 18, 2020',
        '15 gallon capacity rolling garden cart', 32.99, 4.2, 'assets/images/garden_cart.png'),
      new Product(5, 'Hammer', 'TBX-0048', 'May 21, 2020',
        'Curved claw steel hammer', 8.9, 4.8, 'assets/images/hammer.png'),
      new Product(8, 'Saw', 'TBX-0022', 'May 15, 2020',
        '15-inch steel blade hand saw', 11.55, 1.2, 'assets/images/saw.png'),
      new Product(10, 'Video Game Controller', 'GMG-0042', 'October 15, 2019',
        'Standard two-button video game controller', 35.95, 4.4, 'assets/images/xbox-controller.png'),
    ];

    constructor(){
      this.filteredProducts = this.products;
      this.listFilter = '';
    }

    ToggleImageColumn(): void {
        this.showImageColumn = !this.showImageColumn;
    }

    ngOnInit(): void {
      console.log('In product-list.component\'s ngOnIt method');
    }

    performFiler(filterBy: string): Product[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((prod: Product) =>
        prod.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
        // || prod.description.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    onNotifyStarEvent(eventPayload: number): void {
      this.products.find(x => x.productId === eventPayload).ChangeStartRating();
    }
}


/*
products: Product[] = [
        {
          plistFilterroductId: 1,
          productName: 'Leaf Rake',
          productCode: 'GDN-0011',
          releaseDate: 'March 19, 2019',
          description: 'Leaf rake with 48-inch wooden handle.',
          price: 19.95,
          starRating: 3.2,
          imageUrl: 'assets/images/leaf_rake.png'
        },
        {
          productId: 2,
          productName: 'Garden Cart',
          productCode: 'GDN-0023',
          releaseDate: 'March 18, 2019',
          description: '15 gallon capacity rolling garden cart',
          price: 32.99,
          starRating: 4.2,
          imageUrl: 'assets/images/garden_cart.png'
        },
        {
          productId: 5,
          productName: 'Hammer',
          productCode: 'TBX-0048',
          releaseDate: 'May 21, 2019',
          description: 'Curved claw steel hammer',
          price: 8.9,
          starRating: 4.8,
          imageUrl: 'assets/images/hammer.png'
        },
<div class="crop"
     [style.width.px]="starWidth"
     [title]="rating">
        {
          productId: 8,
          productName: 'Saw',
          productCode: 'TBX-0022',
          releaseDate: 'May 15, 2019',
          description: '15-inch steel blade hand saw',
          price: 11.55,
          starRating: 3.7,
          imageUrl: 'assets/images/saw.png'
        },
        {
          productId: 10,
          productName: 'Video Game Controller',
          productCode: 'GMG-0042',
          releaseDate: 'October 15, 2018',
          description: 'Standard two-button video game controller',
          price: 35.95,
          starRating: 4.6,
          imageUrl: 'assets/images/xbox-controller.png'
        }
      ];
*/