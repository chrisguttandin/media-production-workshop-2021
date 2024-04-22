import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'mpw-slide-twenty-three',
    standalone: true,
    styleUrls: ['./slide-twenty-three.component.scss'],
    templateUrl: './slide-twenty-three.component.html'
})
export class SlideTwentyThreeComponent {}
