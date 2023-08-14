// Problem : 1

function cubeNumber(number) {
  if (typeof number !== 'number') {
    return 'Please provide a valid number';
  } else {
    const result = number * number * number;
    return result;
  }
}

// Problem : 2

function matchFinder(string1, string2) {
  if (typeof string1 !== 'string' || typeof string2 !== 'string') {
    return 'Please provide valid string value';
  } else {
    if (string1.includes(string2)) {
      return true;
    }
    return false;
  }
}

// Problem : 3

function sortMaker(arr) {
  const number1 = arr[0];
  const number2 = arr[1];
  if (number1 < 0 || number2 < 0) {
    return 'Invalid Input';
  } else {
    if (number1 === number2) {
      return ' equal';
    }
    return [Math.max(number1, number2), Math.min(number1, number2)];
  }
}

// Problem : 4

function findAddress(obj) {
  if (typeof obj !== 'object') {
    return 'Please provide a valid object';
  } else {
    const street = obj.street || '__';
    const house = obj.house || '__';
    const society = obj.society || '__';

    return street + ',' + house + ',' + society;
  }
}

// Problem : 5

function canPay(changeArray, totalDue) {
  let sum = 0;
  if (!Array.isArray(changeArray) || changeArray.length === 0) {
    return 'Please provide a valid array input';
  } else {
    for (let i = 0; i < changeArray.length; i++) {
      sum += changeArray[i];
    }
    if (sum >= totalDue) {
      return true;
    } else {
      return false;
    }
  }
}
