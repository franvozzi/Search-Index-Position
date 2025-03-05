function searchInsert(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) /2);

        if (nums[mid] === target){
            return mid; //Target SÍ está en el array y fue encontrado
        } else if (nums[mid] < target) {
            left = mid + 1; // Se busca en la derecha
        } else {
            right = mid - 1 // Se busca en la izquierda
        }
    }
    return left; // Se retorna donde se debería insertar 
};
