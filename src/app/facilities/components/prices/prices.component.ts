import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricesComponent {
    @Input() pricePerDay?: number;
    @Input() priceForService?: number
}
