import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'mpw-slide-twenty',
    styleUrls: ['./slide-twenty.component.scss'],
    templateUrl: './slide-twenty.component.html'
})
export class SlideTwentyComponent {}
