import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as ActionCable from 'actioncable';
import { Broadcaster } from './broadcaster';
import * as i0 from "@angular/core";
import * as i1 from "./broadcaster";
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
        this.cable = ActionCable.createConsumer(url);
    }
    unsubscribe() {
        this.cable.subscriptions.remove(this.subscription);
    }
};
Ng2Cable.ctorParameters = () => [
    { type: Broadcaster }
];
Ng2Cable.ɵprov = i0.ɵɵdefineInjectable({ factory: function Ng2Cable_Factory() { return new Ng2Cable(i0.ɵɵinject(i1.Broadcaster)); }, token: Ng2Cable, providedIn: "root" });
Ng2Cable = __decorate([
    Injectable({
        providedIn: 'root'
    })
], Ng2Cable);
export { Ng2Cable };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWNhYmxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItY2FibGUvIiwic291cmNlcyI6WyJsaWIvbmcyLWNhYmxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDMUMsT0FBTyxLQUFLLFdBQVcsTUFBTSxhQUFhLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBSzVDLElBQWEsUUFBUSxHQUFyQixNQUFhLFFBQVE7SUFLbkIsWUFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFGckMsZ0JBQVcsR0FBRyxXQUFXLENBQUM7SUFHakMsQ0FBQztJQUVELFNBQVMsQ0FBQyxHQUFVLEVBQUUsT0FBYyxFQUFFLE1BQU0sR0FBQyxFQUFFO1FBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxrQkFBa0IsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFO1lBQ3RFLFFBQVEsRUFBRSxDQUFDLElBQVEsRUFBRSxFQUFFO2dCQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDN0QsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBVTtRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JELENBQUM7Q0FDRixDQUFBOztZQXBCa0MsV0FBVzs7O0FBTGpDLFFBQVE7SUFIcEIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLFFBQVEsQ0F5QnBCO1NBekJZLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCAqIGFzIEFjdGlvbkNhYmxlIGZyb20gJ2FjdGlvbmNhYmxlJztcbmltcG9ydCB7IEJyb2FkY2FzdGVyIH0gZnJvbSAnLi9icm9hZGNhc3Rlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5nMkNhYmxlIHtcbiAgcHVibGljIGNhYmxlOiBhbnk7XG4gIHB1YmxpYyBzdWJzY3JpcHRpb246IGFueTtcbiAgcHVibGljIGFjdGlvbkNhYmxlID0gQWN0aW9uQ2FibGU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBicm9hZGNhc3RlcjogQnJvYWRjYXN0ZXIpIHtcbiAgfVxuXG4gIHN1YnNjcmliZSh1cmw6c3RyaW5nLCBjaGFubmVsOnN0cmluZywgcGFyYW1zPXt9KSB7XG4gICAgdGhpcy5zZXRDYWJsZSh1cmwpO1xuICAgIGxldCBzdWJzY3JpcHRpb25QYXJhbXMgPSBPYmplY3QuYXNzaWduKHsgY2hhbm5lbDogY2hhbm5lbCB9LCBwYXJhbXMpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5jYWJsZS5zdWJzY3JpcHRpb25zLmNyZWF0ZShzdWJzY3JpcHRpb25QYXJhbXMsIHtcbiAgICAgIHJlY2VpdmVkOiAoZGF0YTphbnkpID0+IHtcbiAgICAgICAgdGhpcy5icm9hZGNhc3Rlci5icm9hZGNhc3QoKGRhdGEuYWN0aW9uIHx8IGNoYW5uZWwpLCBkYXRhKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldENhYmxlKHVybDpzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNhYmxlID0gQWN0aW9uQ2FibGUuY3JlYXRlQ29uc3VtZXIodXJsKTtcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKCkge1xuICAgIHRoaXMuY2FibGUuc3Vic2NyaXB0aW9ucy5yZW1vdmUodGhpcy5zdWJzY3JpcHRpb24pO1xuICB9XG59XG4iXX0=