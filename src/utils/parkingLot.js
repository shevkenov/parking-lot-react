export default class ParkingLot {
    constructor(parkingSize){
        this.slots = new Array(parkingSize).fill(null);
    }

    park(carId) {
        const freePlace = this.slots.findIndex(s => s === null);
        if(freePlace < 0) return false;
        const slots = [...this.slots];
        slots[freePlace] = carId;
        this.slots = [...slots];

        return true;
    }

    removeCar(carId) {
        const carSlot = this.slots.findIndex(s => s === carId);
        if(carSlot < 0) return false;

        const slots = [...this.slots];
        slots[carSlot] = null;
        this.slots = [...slots];
        return true;
    }

    getSlots() {
        return this.slots;
    }

    getSize() {
        return this.slots.length;
    }

    getAvailable() {
        return this.slots.filter(s => s === null).length;
    }

    isFull() {
        return !this.getAvailable()
    }
}