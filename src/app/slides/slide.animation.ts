import { animate, animation, group, query, style } from '@angular/animations';

// @todo For some reason the objects which define the styles can't be composed when using AoT.

export const slideAnimation = animation([
    query(
        ':enter, :leave',
        style({
            position: 'fixed',
            top: '{{ top }}',
            width: '{{ width }}'
        })
    ),
    group([
        query(
            ':enter',
            [
                style({
                    filter: 'blur({{ blur }}) brightness(0.9) saturate(0.9)',
                    opacity: 0.5,
                    transform: '{{ enterTransform }}'
                }),
                animate(
                    '{{ duration }} ease-in-out',
                    style({
                        filter: 'blur(0) brightness(1) saturate(1)',
                        opacity: 1,
                        transform: 'translateX(0)'
                    })
                )
            ],
            { optional: true }
        ),
        query(
            ':leave',
            animate(
                '{{ duration }} ease-in-out',
                style({
                    filter: 'blur({{ blur }}) brightness(0.9) saturate(0.9)',
                    opacity: 0.5,
                    transform: '{{ leaveTransform }}'
                })
            ),
            { optional: true }
        )
    ])
]);
