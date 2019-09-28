export class StarClickPayload {
    public productId: number;
    public starClickedNumber: number;
    public message: string;

    constructor(productId: number, starClickedNumber: number, message: string) {
        this.productId = productId;
        this.starClickedNumber = starClickedNumber;
        this.message = message;
    }
}
