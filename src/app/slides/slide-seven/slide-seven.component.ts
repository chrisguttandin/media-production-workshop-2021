import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'mpw-slide-seven',
    styleUrls: ['./slide-seven.component.scss'],
    templateUrl: './slide-seven.component.html'
})
export class SlideSevenComponent {}
