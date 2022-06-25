export default function distributeSlots(arr, rowLimit){
    let slots = arr.length;
    let rowsCount = Math.ceil(slots / rowLimit);
    let rows = rowsCount;
    let row = [];
    let matrix = [];

    while (rows > 0 && slots > 0) {
        slots--
        
        const slot = arr[slots];
        row.push({
            isTaken: slot !== null && slot !== undefined,
            plateNumber: slot ? slot : slots,
            slotNumber: slots
        })
        
        if(slots % rowsCount === 0){
            matrix.push(row);
            rows--;
            row = [];
        }
    }

    return matrix
}