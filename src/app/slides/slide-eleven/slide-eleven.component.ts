import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'mpw-slide-eleven',
    standalone: true,
    styleUrls: ['./slide-eleven.component.scss'],
    templateUrl: './slide-eleven.component.html'
})
export class SlideElevenComponent {}
