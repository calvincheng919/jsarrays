// console.log('hello world');


// let numbers = [2,4,6,8,10,12];

// what is an index? - index is the address of the item.
// to reference the number 8, we would reference the index 3 - numbers[3] === 8

// Loops give us ability to do something repeatedly... and fast. Loop through an array and console log it.

// console.log(numbers[3]) //expecting 8


// loop through from 0 to the length of the array, incrementing by 1

// Become the computer!!

// for (let i = 0; i < numbers.length ; i++) {

//   //iteration
//   //do the thing here.
//   console.log(numbers[i]);
  
// }





let people = ['sally', 'sam', 'susan', 'bob'];


// pseudocode - simple english descriptions of what we want to do


// at i = 0 ... people[0] is sally
// at i = 1 ... people[1] is sam
// at i = 2 ... people[2] is susan
// at i = 3 ... people[3] is bob

//
for (let i=0; i < people.length; i++) {

  // if the name at the index is sam, then ... console log
  // give me the code for this logic/pseudocode
  // we are looking for sam
  if ( people[i] === 'sam' ) {
    console.log('we found ', people[i]);
    document.querySelector('h1').textContent = 'we found ' + people[i];
  } else {
    console.log( people[i], ' is not sam');
    alert( people[i] + ' is not sam')
  }

}

// document.querySelector('h1').textContent = 'test from javascript';