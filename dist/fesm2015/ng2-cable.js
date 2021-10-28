import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, ɵɵinject, Injectable, NgModule } from '@angular/core';
import * as ActionCable from 'actioncable';
import { createConsumer } from 'actioncable';
import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

class Broadcaster {
    constructor() {
        this._eventBus = new Subject();
    }
    broadcast(key, data) {
        this._eventBus.next({ key, data });
    }
    on(key) {
        return this._eventBus.asObservable()
            .pipe(filter((event) => event.key === key), map((event) => event.data));
    }
}

let Ng2Cable = class Ng2Cable {
    constructor(broadcaster) {
        this.broadcaster = broadcaster;
        this.actionCable = ActionCable;
    }
    subscribe(url, channel, params = {}) {
        this.setCable(url);
        let subscriptionParams = Object.assign({ channel: channel }, params);
        this.subscription = this.cable.subscriptions.create(subscriptionParams, {
            received: (data) => {
                this.broadcaster.broadcast((data.action || channel), data);
            }
        });
    }
    setCable(url) {
        this.cable = createConsumer(url);
    }
    unsubscribe() {
        this.cable.subscriptions.remove(this.subscription);
    }
};
Ng2Cable.ctorParameters = () => [
    { type: Broadcaster }
];
Ng2Cable.ɵprov = ɵɵdefineInjectable({ factory: function Ng2Cable_Factory() { return new Ng2Cable(ɵɵinject(Broadcaster)); }, token: Ng2Cable, providedIn: "root" });
Ng2Cable = __decorate([
    Injectable({
        providedIn: 'root'
    })
], Ng2Cable);

var Ng2CableModule_1;
let Ng2CableModule = Ng2CableModule_1 = class Ng2CableModule {
    static forRoot() {
        return {
            ngModule: Ng2CableModule_1,
            providers: [
                Ng2Cable,
                Broadcaster
            ]
        };
    }
};
Ng2CableModule = Ng2CableModule_1 = __decorate([
    NgModule({
        providers: [
            Ng2Cable,
            Broadcaster
        ]
    })
], Ng2CableModule);

/*
 * Public API Surface of ng2-cable
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Broadcaster, Ng2Cable, Ng2CableModule };
//# sourceMappingURL=ng2-cable.js.map
