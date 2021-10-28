import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { Ng2Cable } from './ng2-cable.service';
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
    Ng2CableModule = Ng2CableModule_1 = __decorate([
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWNhYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1jYWJsZS8iLCJzb3VyY2VzIjpbImxpYi9uZzItY2FibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVE1QztJQUFBO0lBVUEsQ0FBQzt1QkFWWSxjQUFjO0lBQ2xCLHNCQUFPLEdBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFjO1lBQ3hCLFNBQVMsRUFBRTtnQkFDVCxRQUFRO2dCQUNSLFdBQVc7YUFDWjtTQUNGLENBQUM7SUFDSixDQUFDOztJQVRVLGNBQWM7UUFOMUIsUUFBUSxDQUFDO1lBQ1IsU0FBUyxFQUFFO2dCQUNULFFBQVE7Z0JBQ1IsV0FBVzthQUNaO1NBQ0YsQ0FBQztPQUNXLGNBQWMsQ0FVMUI7SUFBRCxxQkFBQztDQUFBLEFBVkQsSUFVQztTQVZZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmcyQ2FibGUgfSBmcm9tICcuL25nMi1jYWJsZS5zZXJ2aWNlJztcbmltcG9ydCB7IEJyb2FkY2FzdGVyIH0gZnJvbSAnLi9icm9hZGNhc3Rlcic7XG5cbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW1xuICAgIE5nMkNhYmxlLFxuICAgIEJyb2FkY2FzdGVyXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmcyQ2FibGVNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE5nMkNhYmxlTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZzJDYWJsZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBOZzJDYWJsZSxcbiAgICAgICAgQnJvYWRjYXN0ZXJcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=