import * as i0 from '@angular/core';
import { Injectable, NgModule } from '@angular/core';
import * as ActionCable from 'actioncable';
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

class Ng2Cable {
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
        this.cable = ActionCable.createConsumer(url);
    }
    unsubscribe() {
        this.cable.subscriptions.remove(this.subscription);
    }
}
Ng2Cable.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: Ng2Cable, deps: [{ token: Broadcaster }], target: i0.ɵɵFactoryTarget.Injectable });
Ng2Cable.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: Ng2Cable, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: Ng2Cable, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: Broadcaster }]; } });

class Ng2CableModule {
    static forRoot() {
        return {
            ngModule: Ng2CableModule,
            providers: [
                Ng2Cable,
                Broadcaster
            ]
        };
    }
}
Ng2CableModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: Ng2CableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
Ng2CableModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: Ng2CableModule });
Ng2CableModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: Ng2CableModule, providers: [
        Ng2Cable,
        Broadcaster
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: Ng2CableModule, decorators: [{
            type: NgModule,
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

export { Broadcaster, Ng2Cable, Ng2CableModule };
//# sourceMappingURL=ng2-cable.js.map
