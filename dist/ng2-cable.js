import { Injectable } from '@angular/core';
import * as ActionCable from 'actioncable';
import * as i0 from "@angular/core";
import * as i1 from "./broadcaster";
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
        this.cable = ActionCable.createConsumer(url);
    };
    Ng2Cable.prototype.unsubscribe = function () {
        this.cable.subscriptions.remove(this.subscription);
    };
    Ng2Cable.ɵfac = function Ng2Cable_Factory(t) { return new (t || Ng2Cable)(i0.ɵɵinject(i1.Broadcaster)); };
    Ng2Cable.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: Ng2Cable, factory: Ng2Cable.ɵfac });
    return Ng2Cable;
}());
export { Ng2Cable };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Ng2Cable, [{
        type: Injectable
    }], function () { return [{ type: i1.Broadcaster }]; }, null); })();
//# sourceMappingURL=ng2-cable.js.map