import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
var Broadcaster = /** @class */ (function () {
    function Broadcaster() {
        this._eventBus = new Subject();
    }
    Broadcaster.prototype.broadcast = function (key, data) {
        this._eventBus.next({ key: key, data: data });
    };
    Broadcaster.prototype.on = function (key) {
        return this._eventBus.asObservable()
            .pipe(filter(function (event) { return event.key === key; }), map(function (event) { return event.data; }));
    };
    return Broadcaster;
}());
export { Broadcaster };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvYWRjYXN0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItY2FibGUvIiwic291cmNlcyI6WyJsaWIvYnJvYWRjYXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzdDO0lBR0U7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksT0FBTyxFQUFrQixDQUFDO0lBQ2pELENBQUM7SUFFRCwrQkFBUyxHQUFULFVBQVUsR0FBUSxFQUFFLElBQVU7UUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEtBQUEsRUFBRSxJQUFJLE1BQUEsRUFBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELHdCQUFFLEdBQUYsVUFBTSxHQUFRO1FBQ1osT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRTthQUNqQyxJQUFJLENBQ0gsTUFBTSxDQUNKLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQWpCLENBQWlCLENBQzdCLEVBQ0QsR0FBRyxDQUNELFVBQUMsS0FBSyxJQUFLLE9BQUcsS0FBSyxDQUFDLElBQUksRUFBYixDQUFhLENBQ3pCLENBQ0YsQ0FBQTtJQUNMLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUF0QkQsSUFzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGludGVyZmFjZSBCcm9hZGNhc3RFdmVudCB7XG4gIGtleTogYW55O1xuICBkYXRhPzogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgQnJvYWRjYXN0ZXIge1xuICBwcml2YXRlIF9ldmVudEJ1czogU3ViamVjdDxCcm9hZGNhc3RFdmVudD47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fZXZlbnRCdXMgPSBuZXcgU3ViamVjdDxCcm9hZGNhc3RFdmVudD4oKTtcbiAgfVxuXG4gIGJyb2FkY2FzdChrZXk6IGFueSwgZGF0YT86IGFueSkge1xuICAgIHRoaXMuX2V2ZW50QnVzLm5leHQoe2tleSwgZGF0YX0pO1xuICB9XG5cbiAgb248VD4oa2V5OiBhbnkpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZXZlbnRCdXMuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgKGV2ZW50KSA9PiBldmVudC5rZXkgPT09IGtleVxuICAgICAgICApLFxuICAgICAgICBtYXAoXG4gICAgICAgICAgKGV2ZW50KSA9PiA8VD5ldmVudC5kYXRhXG4gICAgICAgIClcbiAgICAgIClcbiAgfVxufVxuIl19