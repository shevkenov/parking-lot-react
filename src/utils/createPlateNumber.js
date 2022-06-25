export default function createPlateNumber() {
    const letters = 'qwertyuioplkjhgfdsazxcvbnm';
    
    let plateNumber = ''
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * 26)
        if(i === 0 || i === 4){
            plateNumber += Math.floor(Math.random() * 9);
        }else{
            plateNumber += letters[randomIndex].toUpperCase();
        }
        
    }

    return plateNumber
}