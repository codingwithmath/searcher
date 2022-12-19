const helper = require("./src/helper/helper");

function getFiles() {
  const generateJsonFile = require("./src/scripts/generateJsonFile");

  generateJsonFile.execute();

  const jsonfile = require("./content.json");

  return jsonfile;
}

function getPattern() {
  const [pattern] = process.argv.slice(2);

  if (!pattern) {
    console.error("Necessário fornecer uma sentença para a pesquisa.");

    throw new Error("no input pattern.");
  }

  return pattern;
}

function print(files, input) {
  const occurrences = files.length;

  console.log(`Foram encontradas ${occurrences} ocorrências.`);

  console.log(`Os arquivos que possuem ${input} são:`);

  files.forEach((file) => {
    console.log(file);
  });
}

function search() {
  const files = getFiles();

  const pattern = getPattern();

  const filenames = helper.searchFilesWithTheGivenPattern(pattern, files);

  print(filenames, pattern);
}

search();
