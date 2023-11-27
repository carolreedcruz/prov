// 5.1 Spread med objekt (2p)
// Skriv klart funktionen addIsFast som tar ett bil-objekt och returnerar en kopia
// av objektet och dessutom lägger till egenskapen isFast på det nya objektet.
// Om speed är över 100 ska isFast vara true annars ska det vara false

const car = {
  name: "Volvo",
  speed: 120,
};

function addIsFast(car) {
  const carr = { ...car };
   carr.isFast = carr.speed > 100;
   return carr;
}
console.log(addIsFast(car)); // Ska logga { name: "Volvo", speed: 120, isFast: true }

// 5.2  Spread med arrayer (2p)
// Skapa en funktion 'combineArrays' som tar emot två arrayer som argument
// och använder spread operatorn för att kombinera dem till en enda array.
// Returnera den nya arrayen


  function combineArrays(arr1, arr2) {
    const arr3 = [...arr1, ...arr2]
    return arr3
}

// here I combine arrays for e

console.log(combineArrays([1, 2, 3], [4, 5, 6])); // Ska logga [1, 2, 3, 4, 5, 6]

function filterWordsWithLetterA(words) {
  // Create an array to hold the filtered words.
  let filteredWords = [];

  // Loop through each word in the input array.
  for (let i = 0; i < words.length; i++) {
    // Check if the current word contains the letter 'a'.
    if (words[i].includes('a')) {
      // If it does, add it to the filteredWords array.
      filteredWords.push(words[i]);
    }
  }

  // Return the array containing only words with 'a'.
  return filteredWords;
}

console.log(filterWordsWithLetterA(["Programming", "is", "great!"])); // Should log ["Programming", "great!"]