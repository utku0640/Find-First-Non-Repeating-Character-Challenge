function findFirstNonRepeatingCharacter(str) {
  const charCount = {};
  let array = [];
  for (let i = 0; i < str.length; i++) {
    if (!array.includes(str[i])) {
      array.push(str[i]);
    }

    for (let k = i + 1; k < str.length; k++) {
      if (str[i] === str[k]) {
        charCount[str[i]] = false;
      }
    }
  }
  const repeatingCharArray = Object.keys(charCount);
  const filteredArray = array.filter((x) => !repeatingCharArray.includes(x));
  if (filteredArray.length > 0) {
    return filteredArray[0];
  } else {
    return null;
  }
}

module.exports = findFirstNonRepeatingCharacter;
