import { transition, trigger, useAnimation } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { EMPTY, Subscription, from } from 'rxjs';
import { catchError, filter } from 'rxjs/operators';
import { mediaQueryMatch } from 'subscribable-things';
import { WindowService } from '../window.service';
import { slideAnimation } from './slide.animation';

const EXCLUDED_FORWARD_TRANSITIONS = [0, 4, 6, 9, 19, 20, 24];
const NO_TRANSITION_PARAMS = { blur: '0', duration: '0s', enterTransform: 'none', leaveTransform: 'none', top: 'auto', width: 'auto' };

@Component({
    animations: [trigger('transition', [transition('* => *', [useAnimation(slideAnimation)])])],
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./slides.component.css'],
    templateUrl: './slides.component.html'
})
export class SlidesComponent implements OnDestroy, OnInit {
    @HostBinding('@transition') public transition!: {
        params: Record<'blur' | 'duration' | 'enterTransform' | 'leaveTransform' | 'top' | 'width', string>;

        value: number;
    };

    private _index: number;

    private _isPreferingReducedMotion: boolean;

    private _matchMediaQueryMatchSubscription: null | Subscription;

    private _routerEventsSubscription: null | Subscription;

    constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private _windowService: WindowService) {
        this._index = 0;
        this._isPreferingReducedMotion = false;
        this._matchMediaQueryMatchSubscription = null;
        this._routerEventsSubscription = null;
    }

    @HostListener('document:keyup', ['$event']) public handleKeyUp(event: KeyboardEvent): void {
        if (
            (event.code !== undefined && event.code === 'ArrowLeft') ||
            // The keyCode property is deprecated but it should be fine to use it here as it is only used as a fallback.
            event.keyCode === 37
        ) {
            this._goToPreviousSlide();
        } else if (
            (event.code !== undefined && event.code === 'ArrowRight') ||
            // The keyCode property is deprecated but it should be fine to use it here as it is only used as a fallback.
            event.keyCode === 39
        ) {
            this._goToNextSlide();
        }
    }

    public handleSwipeLeft(): void {
        this._goToNextSlide();
    }

    public handleSwipeRight(): void {
        this._goToPreviousSlide();
    }

    public ngOnDestroy(): void {
        this._matchMediaQueryMatchSubscription?.unsubscribe();
        this._routerEventsSubscription?.unsubscribe();
    }

    public ngOnInit(): void {
        this._matchMediaQueryMatchSubscription = from(mediaQueryMatch('(prefers-reduced-motion: reduce)'))
            .pipe(catchError(() => EMPTY))
            .subscribe((isPreferingReducedMotion) => (this._isPreferingReducedMotion = isPreferingReducedMotion)); // eslint-disable-line max-len, rxjs-angular/prefer-async-pipe

        this._routerEventsSubscription = this._router.events
            .pipe(filter((routerEvent) => routerEvent instanceof NavigationEnd))
            .subscribe(() => this._setIndexAndTransition()); // eslint-disable-line rxjs-angular/prefer-async-pipe

        const activatedChildRoute = this._activatedRoute.firstChild;

        if (activatedChildRoute !== null) {
            const index = parseInt(activatedChildRoute.snapshot.url[0].path, 10);

            this._index = index;
            this.transition = { params: NO_TRANSITION_PARAMS, value: index };
        }
    }

    private _goToNextSlide(): void {
        if (this._index < 28) {
            this._router.navigate([`${this._index + 1}`], { relativeTo: this._activatedRoute });
        }
    }

    private _goToPreviousSlide(): void {
        if (this._index > 1) {
            this._router.navigate([`${this._index - 1}`], { relativeTo: this._activatedRoute });
        }
    }

    private _setIndexAndTransition(): void {
        const activatedChildRoute = this._activatedRoute.firstChild;

        if (activatedChildRoute !== null) {
            const newIndex = parseInt(activatedChildRoute.snapshot.url[0].path, 10);
            const direction = newIndex > this._index ? 'forwards' : 'backwards';

            this._index = newIndex;

            if (this._isPreferingReducedMotion || (direction === 'forwards' && EXCLUDED_FORWARD_TRANSITIONS.includes(newIndex))) {
                this.transition = { params: NO_TRANSITION_PARAMS, value: newIndex };
            } else {
                const nativeWindow = this._windowService.nativeWindow;
                const isPortrait = nativeWindow !== null && nativeWindow.innerWidth / nativeWindow.innerHeight < 4 / 3;
                const distance = isPortrait ? '118%' : '108vw';

                this.transition = {
                    params: {
                        blur: isPortrait ? '0.1vw' : '0.1vh',
                        duration: '0.7s',
                        enterTransform: direction === 'forwards' ? `translateX(${distance})` : `translateX(-${distance})`,
                        leaveTransform: direction === 'forwards' ? `translateX(-${distance})` : `translateX(${distance})`,
                        top: isPortrait ? '3.9vw' : '5.2vh',
                        width: isPortrait ? '92.2%' : '122.9333vh'
                    },
                    value: newIndex
                };
            }
        }
    }
}
