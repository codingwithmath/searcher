const script = require('../script')
const path = require('path')
const fs = require('fs')

const dir = path.resolve('./script/tests/mocks/folderMock')

afterAll(() => {
  fs.unlinkSync(`${dir}/content.json`)
})

describe('testes de script', () => {
  test('dado o diretório, deve retornar o nome de todos os arquivos', () => {
    const response = script.getFilesname(dir);

    expect(response).toEqual(['helloworld.txt'])
  });

  test('dado o diretório e o nome dos arquivos, deve retornar os respectivos conteúdo', () => {
    const response = script.getFilesContent(dir, ["helloworld.txt"]);

    expect(response[0].content).toEqual("hello world")
  });

  test('dado um conteúdo, deve criar um arquivo json com o mesmo', () => {
    script.writeJsonFile({ filename: 'helloworld.txt', content: 'hellworld.txt'}, `${dir}/content.json`)
  })
})