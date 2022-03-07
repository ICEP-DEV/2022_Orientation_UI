/**
 * @fileoverview added by tsickle
 * Generated from: performance.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';
/** @type {?} */
const IS_STABLE_START_MARK = '_isStableStart';
/** @type {?} */
const IS_STABLE_END_MARK = '_isStableEnd';
/**
 * @return {?}
 */
function markStarts() {
    if (typeof (window) !== 'undefined' && window.performance) {
        window.performance.mark(IS_STABLE_START_MARK);
        return true;
    }
    else {
        return false;
    }
}
/** @type {?} */
const started = markStarts();
export class PerformanceMonitoringService {
    /**
     * @param {?} appRef
     */
    constructor(appRef) {
        if (started) {
            this.disposable = appRef.isStable.pipe(first((/**
             * @param {?} it
             * @return {?}
             */
            it => it)), tap((/**
             * @return {?}
             */
            () => {
                window.performance.mark(IS_STABLE_END_MARK);
                window.performance.measure('isStable', IS_STABLE_START_MARK, IS_STABLE_END_MARK);
            }))).subscribe();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.disposable) {
            this.disposable.unsubscribe();
        }
    }
}
PerformanceMonitoringService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PerformanceMonitoringService.ctorParameters = () => [
    { type: ApplicationRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PerformanceMonitoringService.prototype.disposable;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyZm9ybWFuY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvd29ya3NwYWNlL3NyYy9wZXJmb3JtYW5jZS8iLCJzb3VyY2VzIjpbInBlcmZvcm1hbmNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUV0RSxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztNQUV0QyxvQkFBb0IsR0FBRyxnQkFBZ0I7O01BQ3ZDLGtCQUFrQixHQUFHLGNBQWM7Ozs7QUFFekMsU0FBUyxVQUFVO0lBQ2YsSUFBSSxPQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxXQUFXLEVBQUU7UUFDdEQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUM5QyxPQUFPLElBQUksQ0FBQztLQUNmO1NBQU07UUFDSCxPQUFPLEtBQUssQ0FBQztLQUNoQjtBQUNMLENBQUM7O01BRUssT0FBTyxHQUFHLFVBQVUsRUFBRTtBQUc1QixNQUFNLE9BQU8sNEJBQTRCOzs7O0lBSXJDLFlBQVksTUFBc0I7UUFDOUIsSUFBSSxPQUFPLEVBQUU7WUFDVCxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNsQyxLQUFLOzs7O1lBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUMsRUFDZixHQUFHOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ0wsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDNUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixDQUFDLENBQUM7WUFDckYsQ0FBQyxFQUFDLENBQ0wsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNqQjtJQUNMLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1AsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUFFO0lBQzNELENBQUM7OztZQW5CSixVQUFVOzs7O1lBbEJGLGNBQWM7Ozs7Ozs7SUFxQm5CLGtEQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcGxpY2F0aW9uUmVmLCBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlyc3QsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuY29uc3QgSVNfU1RBQkxFX1NUQVJUX01BUksgPSAnX2lzU3RhYmxlU3RhcnQnO1xuY29uc3QgSVNfU1RBQkxFX0VORF9NQVJLID0gJ19pc1N0YWJsZUVuZCc7XG5cbmZ1bmN0aW9uIG1hcmtTdGFydHMoKSB7XG4gICAgaWYgKHR5cGVvZih3aW5kb3cpICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucGVyZm9ybWFuY2UpIHtcbiAgICAgICAgd2luZG93LnBlcmZvcm1hbmNlLm1hcmsoSVNfU1RBQkxFX1NUQVJUX01BUkspO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5jb25zdCBzdGFydGVkID0gbWFya1N0YXJ0cygpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGVyZm9ybWFuY2VNb25pdG9yaW5nU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgICBwcml2YXRlIGRpc3Bvc2FibGU6IFN1YnNjcmlwdGlvbnx1bmRlZmluZWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihhcHBSZWY6IEFwcGxpY2F0aW9uUmVmKSB7XG4gICAgICAgIGlmIChzdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3Bvc2FibGUgPSBhcHBSZWYuaXNTdGFibGUucGlwZShcbiAgICAgICAgICAgICAgICBmaXJzdChpdCA9PiBpdCksXG4gICAgICAgICAgICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnBlcmZvcm1hbmNlLm1hcmsoSVNfU1RBQkxFX0VORF9NQVJLKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnBlcmZvcm1hbmNlLm1lYXN1cmUoJ2lzU3RhYmxlJywgSVNfU1RBQkxFX1NUQVJUX01BUkssIElTX1NUQUJMRV9FTkRfTUFSSyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzcG9zYWJsZSkgeyB0aGlzLmRpc3Bvc2FibGUudW5zdWJzY3JpYmUoKTsgfVxuICAgIH1cblxufVxuIl19