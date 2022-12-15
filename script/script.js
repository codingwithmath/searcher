const fs = require('fs')

function execute() {
  const filesname = getFilesname('./data');

  const content = getFilesContent('./data', filesname);

  writeJsonFile(content, './content.json');
}

function getFilesname(dir) {
  const filesname = fs.readdirSync(`${dir}/`, { encoding: 'utf-8'});

  return filesname
}

function getFilesContent(dir, filesname) {
  const contents = filesname.map(filename => {
    const data = fs.readFileSync(`${dir}/${filename}`, {encoding: 'utf-8', flag: 'r'})

    const content = data.toString();

    return {
      filename,
      content,
    }
  })

  return contents;
}

function writeJsonFile(content, filename) {
  fs.writeFileSync(filename, JSON.stringify(content));
}

execute();

module.exports = {
  getFilesname,
  getFilesContent,
  writeJsonFile,
}