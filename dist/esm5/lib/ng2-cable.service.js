import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as ActionCable from 'actioncable';
import { Broadcaster } from './broadcaster';
import * as i0 from "@angular/core";
import * as i1 from "./broadcaster";
var Ng2Cable = /** @class */ (function () {
    function Ng2Cable(broadcaster) {
        this.broadcaster = broadcaster;
        this.actionCable = ActionCable;
    }
    Ng2Cable.prototype.subscribe = function (url, channel, params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        this.setCable(url);
        var subscriptionParams = Object.assign({ channel: channel }, params);
        this.subscription = this.cable.subscriptions.create(subscriptionParams, {
            received: function (data) {
                _this.broadcaster.broadcast((data.action || channel), data);
            }
        });
    };
    Ng2Cable.prototype.setCable = function (url) {
        this.cable = ActionCable.createConsumer(url);
    };
    Ng2Cable.prototype.unsubscribe = function () {
        this.cable.subscriptions.remove(this.subscription);
    };
    Ng2Cable.ctorParameters = function () { return [
        { type: Broadcaster }
    ]; };
    Ng2Cable.ɵprov = i0.ɵɵdefineInjectable({ factory: function Ng2Cable_Factory() { return new Ng2Cable(i0.ɵɵinject(i1.Broadcaster)); }, token: Ng2Cable, providedIn: "root" });
    Ng2Cable = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], Ng2Cable);
    return Ng2Cable;
}());
export { Ng2Cable };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWNhYmxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItY2FibGUvIiwic291cmNlcyI6WyJsaWIvbmcyLWNhYmxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDMUMsT0FBTyxLQUFLLFdBQVcsTUFBTSxhQUFhLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBSzVDO0lBS0Usa0JBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRnJDLGdCQUFXLEdBQUcsV0FBVyxDQUFDO0lBR2pDLENBQUM7SUFFRCw0QkFBUyxHQUFULFVBQVUsR0FBVSxFQUFFLE9BQWMsRUFBRSxNQUFTO1FBQS9DLGlCQVFDO1FBUnFDLHVCQUFBLEVBQUEsV0FBUztRQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksa0JBQWtCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRTtZQUN0RSxRQUFRLEVBQUUsVUFBQyxJQUFRO2dCQUNqQixLQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDN0QsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwyQkFBUSxHQUFSLFVBQVMsR0FBVTtRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELDhCQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JELENBQUM7O2dCQW5CZ0MsV0FBVzs7O0lBTGpDLFFBQVE7UUFIcEIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLFFBQVEsQ0F5QnBCO21CQWhDRDtDQWdDQyxBQXpCRCxJQXlCQztTQXpCWSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgKiBhcyBBY3Rpb25DYWJsZSBmcm9tICdhY3Rpb25jYWJsZSc7XG5pbXBvcnQgeyBCcm9hZGNhc3RlciB9IGZyb20gJy4vYnJvYWRjYXN0ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZzJDYWJsZSB7XG4gIHB1YmxpYyBjYWJsZTogYW55O1xuICBwdWJsaWMgc3Vic2NyaXB0aW9uOiBhbnk7XG4gIHB1YmxpYyBhY3Rpb25DYWJsZSA9IEFjdGlvbkNhYmxlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYnJvYWRjYXN0ZXI6IEJyb2FkY2FzdGVyKSB7XG4gIH1cblxuICBzdWJzY3JpYmUodXJsOnN0cmluZywgY2hhbm5lbDpzdHJpbmcsIHBhcmFtcz17fSkge1xuICAgIHRoaXMuc2V0Q2FibGUodXJsKTtcbiAgICBsZXQgc3Vic2NyaXB0aW9uUGFyYW1zID0gT2JqZWN0LmFzc2lnbih7IGNoYW5uZWw6IGNoYW5uZWwgfSwgcGFyYW1zKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuY2FibGUuc3Vic2NyaXB0aW9ucy5jcmVhdGUoc3Vic2NyaXB0aW9uUGFyYW1zLCB7XG4gICAgICByZWNlaXZlZDogKGRhdGE6YW55KSA9PiB7XG4gICAgICAgIHRoaXMuYnJvYWRjYXN0ZXIuYnJvYWRjYXN0KChkYXRhLmFjdGlvbiB8fCBjaGFubmVsKSwgZGF0YSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRDYWJsZSh1cmw6c3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jYWJsZSA9IEFjdGlvbkNhYmxlLmNyZWF0ZUNvbnN1bWVyKHVybCk7XG4gIH1cblxuICB1bnN1YnNjcmliZSgpIHtcbiAgICB0aGlzLmNhYmxlLnN1YnNjcmlwdGlvbnMucmVtb3ZlKHRoaXMuc3Vic2NyaXB0aW9uKTtcbiAgfVxufVxuIl19