import { env } from 'process';
import { browser, by } from 'protractor';
import { elementShotMatchers, expectElementShot, resembleElementShot } from 'element-shot';

const navigateTo = (path: string) => browser.get(`${browser.baseUrl}${path}`);

describe('slides', () => {
    beforeEach(() => {
        jasmine.addMatchers(elementShotMatchers);
    });

    describe('first slide', () => {
        it('should look the same', async () => {
            await navigateTo('/');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-1');

            if (env.CI === 'true') {
                expectElementShot(result).toHaveMismatchWithinRange(7.8, 8);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

        it('should look the same', async () => {
            await navigateTo('/slides/1');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-1');

            if (env.CI === 'true') {
                expectElementShot(result).toHaveMismatchWithinRange(7.8, 8);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('second slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/2');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-2');

            if (env.CI === 'true') {
                expectElementShot(result).toHaveMismatchWithinRange(0.9, 1.1);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('third slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/3');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-3');

            if (env.CI === 'true') {
                expectElementShot(result).toHaveMismatchWithinRange(0.9, 1.1);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('fourth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/4');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-4');

            if (env.CI === 'true') {
                expectElementShot(result).toHaveMismatchWithinRange(2.9, 3.1);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('fifth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/5');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-5');

            if (env.CI === 'true') {
                expectElementShot(result).toHaveMismatchWithinRange(5.4, 5.6);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('sixth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/6');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-6');

            if (env.CI === 'true') {
                expectElementShot(result).toHaveMismatchWithinRange(4.9, 5.1);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('seventh slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/7');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-7');

            if (env.CI === 'true') {
                expectElementShot(result).toHaveMismatchWithinRange(6.3, 6.5);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('eighth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/8');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-8');

            if (env.CI === 'true') {
                expectElementShot(result).toHaveMismatchWithinRange(7.8, 8);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('nineth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/9');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-9');

            if (env.CI === 'true') {
                expectElementShot(result).toHaveMismatchWithinRange(4.2, 4.4);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('tenth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/10');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-10');

            if (env.CI === 'true') {
                expectElementShot(result).toHaveMismatchWithinRange(4.4, 4.6);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('eleventh slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/11');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-11');

            if (env.CI === 'true') {
                expectElementShot(result).toHaveMismatchWithinRange(3.8, 4);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('twelveth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/12');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-12');

            if (env.CI === 'true') {
                expectElementShot(result).toHaveMismatchWithinRange(7.7, 7.9);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('thirteenth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/13');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-13');

            if (env.CI === 'true') {
                expectElementShot(result).toHaveMismatchWithinRange(5.3, 5.5);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('fourteenth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/14');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-14');

            if (env.CI === 'true') {
                expectElementShot(result).toHaveMismatchWithinRange(7.3, 7.5);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('fifteenth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/15');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-15');

            if (env.CI === 'true') {
                expectElementShot(result).toHaveMismatchWithinRange(12.3, 12.5);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('sixteenth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/16');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-16');

            if (env.CI === 'true') {
                expectElementShot(result).toHaveMismatchWithinRange(3.5, 3.7);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('seventeenth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/17');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-17');

            if (env.CI === 'true') {
                expectElementShot(result).toHaveMismatchWithinRange(4.2, 4.4);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('eighteenth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/18');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-18');

            if (env.CI === 'true') {
                expectElementShot(result).toHaveMismatchWithinRange(5.3, 5.5);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('nineteenth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/19');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-19');

            if (env.CI === 'true') {
                expectElementShot(result).toHaveMismatchWithinRange(6.4, 6.6);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('twentieth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/20');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-20');

            if (env.CI === 'true') {
                expectElementShot(result).toHaveMismatchWithinRange(7.4, 7.6);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('twenty first slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/21');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-21');

            if (env.CI === 'true') {
                expectElementShot(result).toHaveMismatchWithinRange(8.2, 8.4);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('twenty second slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/22');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-22');

            if (env.CI === 'true') {
                expectElementShot(result).toHaveMismatchWithinRange(3.8, 4);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('twenty third slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/23');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-23');

            if (env.CI === 'true') {
                expectElementShot(result).toHaveMismatchWithinRange(8, 8.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('twenty fourth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/24');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-24');

            if (env.CI === 'true') {
                expectElementShot(result).toHaveMismatchWithinRange(13.3, 13.5);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('twenty fifth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/25');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-25');

            if (env.CI === 'true') {
                expectElementShot(result).toHaveMismatchWithinRange(5, 5.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('twenty sixth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/26');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-26');

            if (env.CI === 'true') {
                expectElementShot(result).toHaveMismatchWithinRange(5, 5.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('twenty seventh slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/27');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-27');

            if (env.CI === 'true') {
                expectElementShot(result).toHaveMismatchWithinRange(5, 5.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });

    describe('twenty eigth slide', () => {
        it('should look the same', async () => {
            await navigateTo('/slides/28');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-28');

            if (env.CI === 'true') {
                expectElementShot(result).toHaveMismatchWithinRange(5, 5.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });
    });
});
