(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('rxjs/operators'), require('tslib'), require('@angular/core'), require('actioncable')) :
    typeof define === 'function' && define.amd ? define(['exports', 'rxjs', 'rxjs/operators', 'tslib', '@angular/core', 'actioncable'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["ng2-cable"] = {}, global.Rx, global.Rx.operators, global.tslib, global.ng.core, global.ActionCable));
})(this, (function (exports, rxjs, operators, tslib_1, core, ActionCable) { 'use strict';

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

    var tslib_1__namespace = /*#__PURE__*/_interopNamespace(tslib_1);
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
        Ng2Cable = tslib_1__namespace.__decorate([
            core.Injectable(),
            tslib_1__namespace.__metadata("design:paramtypes", [Broadcaster])
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
        Ng2CableModule = Ng2CableModule_1 = tslib_1__namespace.__decorate([
            core.NgModule({
                providers: [
                    Ng2Cable,
                    Broadcaster
                ]
            })
        ], Ng2CableModule);
        return Ng2CableModule;
    }());

    exports.Broadcaster = Broadcaster;
    exports.Ng2Cable = Ng2Cable;
    exports.Ng2CableModule = Ng2CableModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
