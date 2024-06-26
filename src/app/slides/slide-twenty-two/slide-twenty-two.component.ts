import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'mpw-slide-twenty-two',
    standalone: true,
    styleUrls: ['./slide-twenty-two.component.scss'],
    templateUrl: './slide-twenty-two.component.html'
})
export class SlideTwentyTwoComponent {}
