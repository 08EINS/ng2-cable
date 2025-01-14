import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
export class Broadcaster {
    constructor() {
        this._eventBus = new Subject();
    }
    broadcast(key, data) {
        this._eventBus.next({ key, data });
    }
    on(key) {
        return this._eventBus.asObservable()
            .pipe(filter((event) => event.key === key), map((event) => event.data));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvYWRjYXN0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2Jyb2FkY2FzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU83QyxNQUFNLE9BQU8sV0FBVztJQUd0QjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxPQUFPLEVBQWtCLENBQUM7SUFDakQsQ0FBQztJQUVELFNBQVMsQ0FBQyxHQUFRLEVBQUUsSUFBVTtRQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxFQUFFLENBQUksR0FBUTtRQUNaLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUU7YUFDakMsSUFBSSxDQUNILE1BQU0sQ0FDSixDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQzdCLEVBQ0QsR0FBRyxDQUNELENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBSSxLQUFLLENBQUMsSUFBSSxDQUN6QixDQUNGLENBQUE7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGludGVyZmFjZSBCcm9hZGNhc3RFdmVudCB7XG4gIGtleTogYW55O1xuICBkYXRhPzogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgQnJvYWRjYXN0ZXIge1xuICBwcml2YXRlIF9ldmVudEJ1czogU3ViamVjdDxCcm9hZGNhc3RFdmVudD47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fZXZlbnRCdXMgPSBuZXcgU3ViamVjdDxCcm9hZGNhc3RFdmVudD4oKTtcbiAgfVxuXG4gIGJyb2FkY2FzdChrZXk6IGFueSwgZGF0YT86IGFueSkge1xuICAgIHRoaXMuX2V2ZW50QnVzLm5leHQoe2tleSwgZGF0YX0pO1xuICB9XG5cbiAgb248VD4oa2V5OiBhbnkpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZXZlbnRCdXMuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgKGV2ZW50KSA9PiBldmVudC5rZXkgPT09IGtleVxuICAgICAgICApLFxuICAgICAgICBtYXAoXG4gICAgICAgICAgKGV2ZW50KSA9PiA8VD5ldmVudC5kYXRhXG4gICAgICAgIClcbiAgICAgIClcbiAgfVxufVxuIl19