(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('actioncable'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ng2-cable', ['exports', '@angular/core', 'actioncable', 'rxjs', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["ng2-cable"] = {}, global.ng.core, global.ActionCable, global.rxjs, global.rxjs.operators));
})(this, (function (exports, i0, ActionCable, rxjs, operators) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var ActionCable__namespace = /*#__PURE__*/_interopNamespace(ActionCable);

    var Broadcaster = /** @class */ (function () {
        function Broadcaster() {
            this._eventBus = new rxjs.Subject();
        }
        Broadcaster.prototype.broadcast = function (key, data) {
            this._eventBus.next({ key: key, data: data });
        };
        Broadcaster.prototype.on = function (key) {
            return this._eventBus.asObservable()
                .pipe(operators.filter(function (event) { return event.key === key; }), operators.map(function (event) { return event.data; }));
        };
        return Broadcaster;
    }());

    var Ng2Cable = /** @class */ (function () {
        function Ng2Cable(broadcaster) {
            this.broadcaster = broadcaster;
            this.actionCable = ActionCable__namespace;
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
            this.cable = ActionCable__namespace.createConsumer(url);
        };
        Ng2Cable.prototype.unsubscribe = function () {
            this.cable.subscriptions.remove(this.subscription);
        };
        return Ng2Cable;
    }());
    Ng2Cable.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: Ng2Cable, deps: [{ token: Broadcaster }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Ng2Cable.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: Ng2Cable, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: Ng2Cable, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: Broadcaster }]; } });

    var Ng2CableModule = /** @class */ (function () {
        function Ng2CableModule() {
        }
        Ng2CableModule.forRoot = function () {
            return {
                ngModule: Ng2CableModule,
                providers: [
                    Ng2Cable,
                    Broadcaster
                ]
            };
        };
        return Ng2CableModule;
    }());
    Ng2CableModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: Ng2CableModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    Ng2CableModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: Ng2CableModule });
    Ng2CableModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: Ng2CableModule, providers: [
            Ng2Cable,
            Broadcaster
        ] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: Ng2CableModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        providers: [
                            Ng2Cable,
                            Broadcaster
                        ]
                    }]
            }] });

    /*
     * Public API Surface of ng2-cable
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Broadcaster = Broadcaster;
    exports.Ng2Cable = Ng2Cable;
    exports.Ng2CableModule = Ng2CableModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ng2-cable.umd.js.map
