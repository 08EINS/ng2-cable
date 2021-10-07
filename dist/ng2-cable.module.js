import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { Ng2Cable } from './ng2-cable';
import { Broadcaster } from './broadcaster';
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
    Ng2CableModule = Ng2CableModule_1 = tslib_1.__decorate([
        NgModule({
            providers: [
                Ng2Cable,
                Broadcaster
            ]
        })
    ], Ng2CableModule);
    return Ng2CableModule;
}());
export { Ng2CableModule };
//# sourceMappingURL=ng2-cable.module.js.map