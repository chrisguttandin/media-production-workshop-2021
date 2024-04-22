import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'mpw-slide-sixteen',
    standalone: true,
    styleUrls: ['./slide-sixteen.component.scss'],
    templateUrl: './slide-sixteen.component.html'
})
export class SlideSixteenComponent {}
