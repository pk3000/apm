export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: number;
    starRating: number;
    imageUrl: string;
}

// The 'implements' keyword has no meaning in Javascript.
// When the .ts file gets transpiled tp .js, the 'implement' does to get included in the generated code
// However, it is useful during development because it allows tools like VS IDE to give us auto-complete and error checking based on types
export class Product implements IProduct {

    constructor(public productId: number,
                public productName: string,
                public productCode: string,
                public releaseDate: string,
                public description: string,
                public price: number,
                public starRating: number,
                public imageUrl: string) {
                }
    // TypeScript 'constructor' keyword allows declartion and assignment all at once
    // https://kendaleiv.com/typescript-constructor-assignment-public-and-private-keywords/
    // The above would be equivalent to:
    /*
        class Product {
            public productId: number;
            public productName: string;
            ...

            constructor(productId: number, productName: string) {
                this.productId = productId;
                this.productName = productName;
                ...
            }
        }
    */

    calculateDiscount(percent: number): number {
        return this.price - (this.price * (percent / 100));
    }
}
