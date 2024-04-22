import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'mpw-slide-twenty-four',
    standalone: true,
    styleUrls: ['./slide-twenty-four.component.scss'],
    templateUrl: './slide-twenty-four.component.html'
})
export class SlideTwentyFourComponent {}
