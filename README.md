# Search Insert Position

https://leetcode.com/problems/search-insert-position/

## Descripción / Description
🇦🇷 Dado un array ordenado de diferentes enteros y un valor objetivo, retornar el índice si el objetivo es encontrado. Sino, retornar el índice donde el índice debería insertarse en orden.
Se deberá escribir un algoritmo con complejidad de ejecución de ```O(log n)```

🇺🇸 Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with ```O(log n)``` runtime complexity.

Ejemplo 1/example 1:
```
Input: nums = [1,3,5,6], target = 5
Output: 2
```
Ejemplo 2/example 2:
```
Input: nums = [1,3,5,6], target = 2
Output: 1
```
Ejemplo 3/example 3:
```
Input: nums = [1,3,5,6], target = 7
Output: 4
```

## Resolviendo el problema / Solving the problem

🇦🇷 Tenemos dos formas de encontrar el valor ```target```. 
Podemos recorrer el array **uno por uno (Búsqueda Lineal)** hasta encontrar el objetivo o el primer número mayor que ```target```. Esto es ineficiente, ya que si el array ```nums``` tiene muchos elementos, tardaría mucho en iterar.
Ya sabemos que el array está ordenado, entonces podemos utilizar una **Búsqueda Binaria**.

1) Primero, definimos ```left``` como ```left = 0```(primer índice del array), luego ```right```como ```right = array.length - 1```(Último índice del array). Finalmente calculamos ```mid``` como punto medio del array.
2) La estrategia a seguir es, si ```target``` es menor que ```mid```, descartamos la mitad derecha. Si ```target``` es mayor que ```mid```, descartamos la mitad izquierda. En cada iteración se calculará ```mid``` nuevamente.
3) ¿Cómo sabemos cuando parar? Que se encontró el índice de ```target```, o si ```left``` superó a ```right```.

  Imaginemos que el array es iterado desde las dos puntas del array, como si fuera una reducción.

Mi solución en TypeScript
```ts
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
```

   
