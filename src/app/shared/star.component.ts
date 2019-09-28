import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    // @Input() exposes this to containing component to allow binding
    @Input() rating: number;

    @Input() productId: number;

    // The property type decorated with @Output MUST BE AN EVENT. 
    // This is the only way to pass data to container component. The data is encapsulated in the event’s payload.
    // @Output() notify: EventEmitter<string> = new EventEmitter<string>(); // defines that the payload will be of type string
    @Output() notify: EventEmitter<number> = new EventEmitter<number>(); // defines that the payload will be of type number

    starWidth: number;

    calculateStarWidth(): void {

    }

    ngOnChanges(): void {
        this.starWidth = this.rating * 100 / 5;
    }

    onClickStar() {
        this.notify.emit(this.productId);
    }
}
