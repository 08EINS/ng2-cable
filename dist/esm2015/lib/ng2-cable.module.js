import { NgModule } from '@angular/core';
import { Ng2Cable } from './ng2-cable.service';
import { Broadcaster } from './broadcaster';
import * as i0 from "@angular/core";
export class Ng2CableModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWNhYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvbmcyLWNhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFRNUMsTUFBTSxPQUFPLGNBQWM7SUFDekIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNULFFBQVE7Z0JBQ1IsV0FBVzthQUNaO1NBQ0YsQ0FBQztJQUNKLENBQUM7OzRHQVRVLGNBQWM7NkdBQWQsY0FBYzs2R0FBZCxjQUFjLGFBTGQ7UUFDVCxRQUFRO1FBQ1IsV0FBVztLQUNaOzRGQUVVLGNBQWM7a0JBTjFCLFFBQVE7bUJBQUM7b0JBQ1IsU0FBUyxFQUFFO3dCQUNULFFBQVE7d0JBQ1IsV0FBVztxQkFDWjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZzJDYWJsZSB9IGZyb20gJy4vbmcyLWNhYmxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQnJvYWRjYXN0ZXIgfSBmcm9tICcuL2Jyb2FkY2FzdGVyJztcblxuQE5nTW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgTmcyQ2FibGUsXG4gICAgQnJvYWRjYXN0ZXJcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZzJDYWJsZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TmcyQ2FibGVNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5nMkNhYmxlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIE5nMkNhYmxlLFxuICAgICAgICBCcm9hZGNhc3RlclxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==