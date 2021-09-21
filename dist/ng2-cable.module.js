import { NgModule } from '@angular/core';
import { Ng2Cable } from './ng2-cable';
import { Broadcaster } from './broadcaster';
var Ng2CableModule = /** @class */ (function () {
    function Ng2CableModule() {
    }
    Ng2CableModule.decorators = [
        { type: NgModule, args: [{
                    providers: [
                        Ng2Cable,
                        Broadcaster
                    ]
                },] },
    ];
    return Ng2CableModule;
}());
export { Ng2CableModule };
//# sourceMappingURL=ng2-cable.module.js.map