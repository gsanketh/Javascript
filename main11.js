var a = [10,20,30,40,50];

a.splice(1,2); // splice will remove the selected values in the array (here 1 is the position of array and 2 is the number of elements to be removed from the array)

console.log(a);

a.slice(0,2); // slice will copy the selected values in the array (here 0 is starting position and 2 is ending position)

a.indexOf(30); // it will define the position of the element. If the element is not found it will return -1