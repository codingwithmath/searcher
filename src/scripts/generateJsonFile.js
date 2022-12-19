const fs = require("fs");

function getFileNames(dir) {
  const filesname = fs.readdirSync(`${dir}/`, { encoding: "utf-8" });

  return filesname;
}

function getFilesContents(dir, filesname) {
  const contents = filesname.map((filename) => {
    const data = fs.readFileSync(`${dir}/${filename}`, {
      encoding: "utf-8",
      flag: "r",
    });

    const content = data.toString();

    return {
      filename,
      content,
    };
  });

  return contents;
}

function writeJsonFile(content, filename) {
  fs.writeFileSync(filename, JSON.stringify(content));
}

function execute() {
  const filenames = getFileNames("./data");

  const content = getFilesContents("./data", filenames);

  writeJsonFile(content, "./content.json");
}

module.exports = {
  getFileNames,
  getFilesContents,
  writeJsonFile,
  execute,
};
