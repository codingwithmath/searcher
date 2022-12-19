const script = require("../scripts/generateJsonFile");
const path = require("path");
const fs = require("fs");

const dir = path.resolve("./src/tests/mocks/folderMock");

afterAll(() => {
  fs.unlinkSync(`${dir}/content.test.json`);
});

describe("testes do script", () => {
  test("dado o diretório, deve retornar o nome de todos os arquivos existentes", () => {
    const response = script.getFileNames(dir);

    expect(response).toEqual(["helloworld.txt"]);
  });

  test("dado o diretório e o nome dos arquivos, deve retornar os respectivos conteúdos", () => {
    const response = script.getFilesContents(dir, ["helloworld.txt"]);

    expect(response[0].content).toEqual("hello world");
  });

  test("dado um conteúdo, deve criar um arquivo json com o respectivo conteúdo", () => {
    const content = { filename: "helloworld.txt", content: "hellworld.txt" };
    script.writeJsonFile(content, `${dir}/content.test.json`);

    const jsonFile = require(`${dir}/content.test.json`);

    expect(jsonFile).toEqual(content);
  });
});
