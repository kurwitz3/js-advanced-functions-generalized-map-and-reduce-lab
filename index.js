function map(array,funct){
   return array.map(x => funct(x))
}

function reduce (array, funcy, start) {
   let tmp;

   if(start) {
       tmp = start;
       for (let i = 0; i < array.length; i++) {
           tmp = funcy(array[i], tmp);
       }
   }

   else {
       tmp = array[0];
       for (let i = 1; i < array.length; i++) {
           tmp = funcy(array[i], tmp);
       }
   }
   return tmp;
}
     
    

