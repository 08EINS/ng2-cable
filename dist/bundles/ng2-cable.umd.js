(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('rxjs/operators'), require('@angular/core'), require('actioncable')) :
    typeof define === 'function' && define.amd ? define(['exports', 'rxjs', 'rxjs/operators', '@angular/core', 'actioncable'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["ng2-cable"] = {}, global.Rx, global.Rx.operators, global.ng.core, global.ActionCable));
})(this, (function (exports, rxjs, operators, i0, ActionCable) { 'use strict';

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
        Ng2Cable.ɵfac = function Ng2Cable_Factory(t) { return new (t || Ng2Cable)(i0__namespace.ɵɵinject(Broadcaster)); };
        Ng2Cable.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: Ng2Cable, factory: Ng2Cable.ɵfac });
        return Ng2Cable;
    }());
    (function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(Ng2Cable, [{
            type: i0.Injectable
        }], function () { return [{ type: Broadcaster }]; }, null); })();

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
        Ng2CableModule.ɵfac = function Ng2CableModule_Factory(t) { return new (t || Ng2CableModule)(); };
        Ng2CableModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: Ng2CableModule });
        Ng2CableModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ providers: [
                Ng2Cable,
                Broadcaster
            ] });
        return Ng2CableModule;
    }());
    (function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(Ng2CableModule, [{
            type: i0.NgModule,
            args: [{
                    providers: [
                        Ng2Cable,
                        Broadcaster
                    ]
                }]
        }], null, null); })();

    exports.Broadcaster = Broadcaster;
    exports.Ng2Cable = Ng2Cable;
    exports.Ng2CableModule = Ng2CableModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
