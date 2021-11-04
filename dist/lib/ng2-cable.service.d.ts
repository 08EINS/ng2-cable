import * as ActionCable from 'actioncable';
import { Broadcaster } from './broadcaster';
import * as i0 from "@angular/core";
export declare class Ng2Cable {
    private broadcaster;
    cable: any;
    subscription: any;
    actionCable: typeof ActionCable;
    constructor(broadcaster: Broadcaster);
    subscribe(url: string, channel: string, params?: {}): void;
    setCable(url: string): void;
    unsubscribe(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Ng2Cable, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<Ng2Cable>;
}
