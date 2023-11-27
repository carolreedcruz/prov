// 3. (3p) Arrayer och Funktioner
// Skriv klart funktionen median som tar en array av nummer
// och returnerar median-värdet. Median-värdet är det mittersta
// numret i en serie med nummer. T.ex: är medianvärdet 7 i [1, 5, 7, 23, 120]
// I en array med jämnt antal nummer är median-värdet medelvärdet av
// de två mittersta talen: T.ex: 7.5 i [1, 5, 10, 33].
// Medelvärdet räknas då ut så här: (5 + 10)/2 = 7.5

// Följ denna algoritm för att lösa uppgiften:
// 1. Sortera arrayen med funktionen sortArray

// 2. Kolla om arrayens längd är udda eller jämn med funktionen isEven

// 3. Om arrayens längd är udda returnera talet på mitten-position ((arrayens längd - 1) / 2)

// 4. Om arryens längd är jämn räkna ut och returnera medelvärdet av de två mittersta talen.
//    Dessa har positioner: arrayens längd / 2 och  arrayens längd / 2 - 1
// OBS! Er funktion median måste använda funktionerna sortArray och isEven


function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

function isEven(num) {
  return num % 2 === 0;
}

function median(arr) {
  // 1. Sortera arrayen med funktionen sortArray
  const sortedArr = sortArray(arr);

// 2. Kolla om arrayens längd är udda eller jämn med funktionen isEven
  if (isEven(sortedArr.length)) {
    const midIndex = sortedArr.length / 2;
    return (sortedArr[midIndex - 1] + sortedArr[midIndex]) / 2;
  } else {
  
  // 3. Om arrayens längd är udda returnera talet på mitten-position ((arrayens längd - 1) / 2)
    const midIndex = Math.floor(sortedArr.length / 2);
    return sortedArr[midIndex];
  }
}

// 4. Om arryens längd är jämn räkna ut och returnera medelvärdet av de två mittersta talen.
//    Dessa har positioner: arrayens längd / 2 och  arrayens längd / 2 - 1
console.log(median([1, 5, 7, 23, 120])); // Should log 7
console.log(median([1, 5, 10, 33])); // Should log 7.5