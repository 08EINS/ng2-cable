import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as ActionCable from 'actioncable';
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
Ng2Cable.ɵprov = i0.ɵɵdefineInjectable({ factory: function Ng2Cable_Factory() { return new Ng2Cable(i0.ɵɵinject(i1.Broadcaster)); }, token: Ng2Cable, providedIn: "root" });
Ng2Cable = __decorate([
    Injectable({
        providedIn: 'root'
    })
], Ng2Cable);
export { Ng2Cable };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWNhYmxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL25nMi1jYWJsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQzFDLE9BQU8sS0FBSyxXQUFXLE1BQU0sYUFBYSxDQUFDOzs7QUFNM0MsSUFBYSxRQUFRLEdBQXJCLE1BQWEsUUFBUTtJQUtuQixZQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUZyQyxnQkFBVyxHQUFHLFdBQVcsQ0FBQztJQUdqQyxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQVUsRUFBRSxPQUFjLEVBQUUsTUFBTSxHQUFDLEVBQUU7UUFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUU7WUFDdEUsUUFBUSxFQUFFLENBQUMsSUFBUSxFQUFFLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM3RCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFVO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDckQsQ0FBQztDQUNGLENBQUE7O0FBekJZLFFBQVE7SUFIcEIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLFFBQVEsQ0F5QnBCO1NBekJZLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCAqIGFzIEFjdGlvbkNhYmxlIGZyb20gJ2FjdGlvbmNhYmxlJztcbmltcG9ydCB7IEJyb2FkY2FzdGVyIH0gZnJvbSAnLi9icm9hZGNhc3Rlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5nMkNhYmxlIHtcbiAgcHVibGljIGNhYmxlOiBhbnk7XG4gIHB1YmxpYyBzdWJzY3JpcHRpb246IGFueTtcbiAgcHVibGljIGFjdGlvbkNhYmxlID0gQWN0aW9uQ2FibGU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBicm9hZGNhc3RlcjogQnJvYWRjYXN0ZXIpIHtcbiAgfVxuXG4gIHN1YnNjcmliZSh1cmw6c3RyaW5nLCBjaGFubmVsOnN0cmluZywgcGFyYW1zPXt9KSB7XG4gICAgdGhpcy5zZXRDYWJsZSh1cmwpO1xuICAgIGxldCBzdWJzY3JpcHRpb25QYXJhbXMgPSBPYmplY3QuYXNzaWduKHsgY2hhbm5lbDogY2hhbm5lbCB9LCBwYXJhbXMpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5jYWJsZS5zdWJzY3JpcHRpb25zLmNyZWF0ZShzdWJzY3JpcHRpb25QYXJhbXMsIHtcbiAgICAgIHJlY2VpdmVkOiAoZGF0YTphbnkpID0+IHtcbiAgICAgICAgdGhpcy5icm9hZGNhc3Rlci5icm9hZGNhc3QoKGRhdGEuYWN0aW9uIHx8IGNoYW5uZWwpLCBkYXRhKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldENhYmxlKHVybDpzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNhYmxlID0gQWN0aW9uQ2FibGUuY3JlYXRlQ29uc3VtZXIodXJsKTtcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKCkge1xuICAgIHRoaXMuY2FibGUuc3Vic2NyaXB0aW9ucy5yZW1vdmUodGhpcy5zdWJzY3JpcHRpb24pO1xuICB9XG59XG4iXX0=