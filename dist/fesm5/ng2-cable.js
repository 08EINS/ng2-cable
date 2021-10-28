import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, ɵɵinject, Injectable, NgModule } from '@angular/core';
import * as ActionCable from 'actioncable';
import { createConsumer } from 'actioncable';
import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

var Broadcaster = /** @class */ (function () {
    function Broadcaster() {
        this._eventBus = new Subject();
    }
    Broadcaster.prototype.broadcast = function (key, data) {
        this._eventBus.next({ key: key, data: data });
    };
    Broadcaster.prototype.on = function (key) {
        return this._eventBus.asObservable()
            .pipe(filter(function (event) { return event.key === key; }), map(function (event) { return event.data; }));
    };
    return Broadcaster;
}());

var Ng2Cable = /** @class */ (function () {
    function Ng2Cable(broadcaster) {
        this.broadcaster = broadcaster;
        this.actionCable = ActionCable;
    }
    Ng2Cable.prototype.subscribe = function (url, channel, params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        this.setCable(url);
        var subscriptionParams = Object.assign({ channel: channel }, params);
        this.subscription = this.cable.subscriptions.create(subscriptionParams, {
            received: function (data) {
                _this.broadcaster.broadcast((data.action || channel), data);
            }
        });
    };
    Ng2Cable.prototype.setCable = function (url) {
        this.cable = createConsumer(url);
    };
    Ng2Cable.prototype.unsubscribe = function () {
        this.cable.subscriptions.remove(this.subscription);
    };
    Ng2Cable.ctorParameters = function () { return [
        { type: Broadcaster }
    ]; };
    Ng2Cable.ɵprov = ɵɵdefineInjectable({ factory: function Ng2Cable_Factory() { return new Ng2Cable(ɵɵinject(Broadcaster)); }, token: Ng2Cable, providedIn: "root" });
    Ng2Cable = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], Ng2Cable);
    return Ng2Cable;
}());

var Ng2CableModule = /** @class */ (function () {
    function Ng2CableModule() {
    }
    Ng2CableModule_1 = Ng2CableModule;
    Ng2CableModule.forRoot = function () {
        return {
            ngModule: Ng2CableModule_1,
            providers: [
                Ng2Cable,
                Broadcaster
            ]
        };
    };
    var Ng2CableModule_1;
    Ng2CableModule = Ng2CableModule_1 = __decorate([
        NgModule({
            providers: [
                Ng2Cable,
                Broadcaster
            ]
        })
    ], Ng2CableModule);
    return Ng2CableModule;
}());

/*
 * Public API Surface of ng2-cable
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Broadcaster, Ng2Cable, Ng2CableModule };
//# sourceMappingURL=ng2-cable.js.map
