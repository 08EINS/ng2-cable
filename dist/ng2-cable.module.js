import { NgModule } from '@angular/core';
import { Ng2Cable } from './ng2-cable';
import { Broadcaster } from './broadcaster';
import * as i0 from "@angular/core";
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
    Ng2CableModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: Ng2CableModule });
    Ng2CableModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
            Ng2Cable,
            Broadcaster
        ] });
    return Ng2CableModule;
}());
export { Ng2CableModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Ng2CableModule, [{
        type: NgModule,
        args: [{
                providers: [
                    Ng2Cable,
                    Broadcaster
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=ng2-cable.module.js.map