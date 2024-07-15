// tạo array
let numbers = [];

// hầm thêm number
function addNumber() {
  const numberInput = document.getElementById("numberInput");
  const number = numberInput.value.trim();

  if (isValidInteger(number)) {
    numbers.push(parseInt(number));
    displayNumbers();
  } else {
    alert("Không phải số nguyên");
  }

  console.log("🚀 ~ numbers:", numbers);
}

// hàm kiểm tra phải là số nguyên
function isValidInteger(value) {
  const parsed = parseInt(value);
  return !isNaN(parsed) && parsed.toString() === value;
}

// hàm hiển thị number
function displayNumbers() {
  const numbersList = document.getElementById("numbersList");
  numbersList.innerHTML = `${numbers.join(", ")}`;
}

// bài 1 tính tổng số nguyên dương

function sumPositiveInteger() {
  let sumInteger = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
      sumInteger = sumInteger + numbers[i];
    }
  }
  displaySumPositiveIntegerResult(sumInteger);
}
// hàm hiển thị result
function displaySumPositiveIntegerResult(sumInteger) {
  const showSumResult = document.getElementById("sumPositiveIntegerResult");
  showSumResult.innerHTML = `Tổng số dương: ${sumInteger}`;
}

//  end bài 1

// bài 2

// hàm đếm số dương
function countPositiveInteger() {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      count++;
    }
  }

  displayCountPositiveIntegerResult(count);
}

// hàm hiển thị result
function displayCountPositiveIntegerResult(count) {
  const showResult = document.getElementById("countPositiveIntegerResult");
  showResult.innerHTML = `Số dương: ${count}`;
}

//end bài 2

// bài 3

// hàm tìm số nhỏ nhất
function findSmallestNumber() {
  let smallestNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallestNumber) {
      smallestNumber = numbers[i];
    }
  }
  displayFindSmallestNumberResult(smallestNumber);
}
// hàm hiển thị result
function displayFindSmallestNumberResult(smallestNumber) {
  const showResult = document.getElementById("findSmallestNumberResult");
  showResult.innerHTML = `Số nhỏ nhất: ${smallestNumber}`;
}
// end bài 3

//  bài 4

//  hàm tạo mảng số dương mới
function arrayPositiveInteger() {
  //  mảng mới chứa các số dương
  let positiveNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      positiveNumbers.push(numbers[i]);
    }
  }
  return positiveNumbers;
}

// hàm tìm số nguyên dương nhỏ nhát
function findSmallestPositiveInteger() {
  // tạo mảng só dương
  let positiveNumbers = arrayPositiveInteger();

  // Kiểm tra mảng mới có phần tử hay không
  if (positiveNumbers.length === 0) {
    return (document.getElementById(
      "findSmallestPositiveIntegerResult"
    ).innerHTML = "Không có số dương trong mảng");
  }

  // Tìm giá trị dương nhỏ nhất trong mảng mới
  let smallestPositive = positiveNumbers[0];
  for (let i = 1; i < positiveNumbers.length; i++) {
    if (positiveNumbers[i] < smallestPositive) {
      smallestPositive = positiveNumbers[i];
    }
  }

  displayFindSmallestPositiveIntegerResult(smallestPositive);
}

// hàm hiển thị result
function displayFindSmallestPositiveIntegerResult(smallestPositive) {
  const showResult = document.getElementById(
    "findSmallestPositiveIntegerResult"
  );
  showResult.innerHTML = `Số dương nhỏ nhất: ${smallestPositive}`;
}

// end bài 4

// bài 5

// hàm tìm số chẵn cuối cùng
function findEvenNumber() {
  let evenNumber = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      evenNumber = numbers[i];
    }
  }
  displayFindEvenNumberResult(evenNumber);
}

// hàm hiển thị result
function displayFindEvenNumberResult(evenNumber) {
  const showResult = document.getElementById("findEvenNumberResult");
  showResult.innerHTML = `Số chẵn cuối cùng: ${evenNumber}`;
}

// end bài 5
// bài 6
function transpositionNumber() {
  let numberTemp = numbers;
  let index1 = document.getElementById("index1").value;
  let index2 = document.getElementById("index2").value;

  index1 = parseInt(index1);
  index2 = parseInt(index2);

  let temp = numberTemp[index1];
  numberTemp[index1] = numberTemp[index2];
  numberTemp[index2] = temp;

  displayTranspositionNumberResult(numberTemp);
}

// hàm hiển thị result
function displayTranspositionNumberResult(numberTemp) {
  const showResult = document.getElementById("transpositionNumberResult");
  showResult.innerHTML = `Mãng sau khi đổi: ${numberTemp}`;
}

// end bai 6

// bài 7

function sortArray() {
  let numberTemp = numbers;
  numberTemp.sort((a, b) => a - b);

  displaySortArrayResult(numberTemp);
}

// hàm hiển thị result
function displaySortArrayResult(numberTemp) {
  const showResult = document.getElementById("sortArrayResult");
  showResult.innerHTML = `Mãng sau khi sắp xếp: ${numberTemp}`;
}

//  end bài 7

// bài 8

// Hàm kiểm tra số nguyên tố
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

function findFirstPrime() {
  let firstPrime = null;

  for (let i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) {
      firstPrime = numbers[i];
      break;
    }
  }
  if (firstPrime == null) {
    return (document.getElementById("findFirstPrimeResult").innerHTML =
      "Không có số nguyên tố");
  }

  displayFirstPrimeResult(firstPrime);
}

// hàm hiển thị result
function displayFirstPrimeResult(prime) {
  const showResult = document.getElementById("findFirstPrimeResult");
  showResult.innerHTML = ` ${prime}`;
}

// end bai 8

//  bải 9

// tạo array
let numbers9 = [];

// hầm thêm number
function addNumber9() {
  const numberInput = document.getElementById("numberInput9").value;
  const number = parseFloat(numberInput);
  if (numberInput.trim() !== "") {
    numbers9.push(number);
  }

  displayNumbers9();
  console.log("🚀 ~ numbers9:", numbers9);
}

// hàm hiển thị number
function displayNumbers9() {
  const numbersList = document.getElementById("numbersList9");
  numbersList.innerHTML = `${numbers9.join(", ")}`;
}

//  hàm đếm số nguyên
function countIntegers() {
  let count = 0;

  for (let i = 0; i < numbers9.length; i++) {
    if (Number.isInteger(numbers9[i])) {
      count++;
    }
  }

  // hàm display
  displayCountIntegersResult(count);
}

// hàm hiển thị result
function displayCountIntegersResult(count) {
  const showResult = document.getElementById("countIntegersResult");
  showResult.innerHTML = ` ${count}`;
}
// end bai 9

// baì 10

// hàm kiểm tra số âm số dương
function countNegativePositive() {
  let negativeCount = 0;
  let positiveCount = 0;
  let comparisonResult = "";

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      negativeCount++;
    } else if (numbers[i] > 0) {
      positiveCount++;
    }
  }

  // so sánh số âm số dương
  if (negativeCount > positiveCount) {
    comparisonResult = "Số âm >  số dương.";
  } else if (negativeCount < positiveCount) {
    comparisonResult = "Số dương > số âm.";
  } else {
    comparisonResult = "Số âm và số dương bằng nhau.";
  }

  // display
  displayCountNegativePositiveResult(comparisonResult);
}

// hàm hiển thị result
function displayCountNegativePositiveResult(comparisonResult) {
  const showResult = document.getElementById("countNegativePositiveResult");
  showResult.innerHTML = ` ${comparisonResult}`;
}
