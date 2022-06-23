export default function createParkingLot(arr) {
    const matrix = [];
    for (let i = 0; i < arr.length; i+=4) {
        const endInx = i+4
        matrix.push([...arr.slice(i, endInx)])
        
    }

    return matrix;
}

function distributeSlots(arr, rowLimit){
    let slots = arr.length;
    let rowsCount = Math.ceil(slots / rowLimit);
    let row = [];
    let matrix = [];

    while (rowsCount > 0 && slots > 0) {
        slots--

        const slot = arr[slots];
        row.push({
            isTaken: slot !== null && slot !== undefined,
            plateNumber: slots,
            slotNumber: slot
        })
        
        if(slots % rowsCount === 0){
            matrix.push(row);
            rowsCount--;
            row = [];
        }
    }

    return matrix
}

console.log(distributeSlots(new Array(20).fill(null), 4))