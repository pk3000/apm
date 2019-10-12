import { StarClickPayload } from './starclickpayload';
import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css'],
})

export class StarComponent implements OnChanges {
    // @Input() exposes this to containing component to allow binding
    @Input() rating: number;

    @Input() productId: number;

    // The property type decorated with @Output MUST BE AN EVENT.
    // This is the only way to pass data to container component. The data is encapsulated in the event’s payload.
    // @Output() notify: EventEmitter<string> = new EventEmitter<string>(); // defines that the payload will be of type string
    @Output() notify: EventEmitter<StarClickPayload> = new EventEmitter<StarClickPayload>();

    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 100 / 5;
    }

    onClickStar(starClickedNumber) {
        const scp = new StarClickPayload(this.productId, starClickedNumber, 'FROM STAR COMPOMNENT');
        this.notify.emit(scp);
    }
}
