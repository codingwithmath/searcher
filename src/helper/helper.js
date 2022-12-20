function searchFilesWithTheGivenPattern(pattern, data) {
  const splitedPattern = splitString(pattern);

  const filenames = [];
  var isInputValid = [];

  for (var i = 0; i < data.length; i++) {
    isInputValid = [];

    for (var j = 0; j < splitedPattern.length; j++) {
      const result = data[i].content.search(splitedPattern[j]);

      if (result < 0) {
        break;
      }

      isInputValid.push(true);
    }

    if (isInputValid.length === splitedPattern.length) {
      filenames.push(data[i].filename);
    }
  }

  return sortStrings(filenames);
}

function splitString(string = "") {
  const formatedString = string.split(" ");

  return formatedString;
}

function sortStrings(strings = []) {
  return strings.sort();
}

module.exports = {
  searchFilesWithTheGivenPattern,
  splitString,
  sortStrings,
};
