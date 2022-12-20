const helper = require("../helper/helper");

describe("ordenação de strings", () => {
  test("dado um array de strings, deve ordenar em ordem crescente e alfabética", () => {
    const arrayOfString = [
      "01-the-first",
      "03-the-thrid",
      "02-the-second",
      "welcome-to-my-world",
      "nice-to-meet-you",
      "hello-world",
      "a-requiem-for-a-dream",
    ];

    const response = helper.sortStrings(arrayOfString);

    expect(response).toEqual([
      "01-the-first",
      "02-the-second",
      "03-the-thrid",
      "a-requiem-for-a-dream",
      "hello-world",
      "nice-to-meet-you",
      "welcome-to-my-world",
    ]);
  });

  test("dado um array de strings númericas, deve ordenar em ordem crescente", () => {
    const arrayOfString = ["001", "01", "02", "05", "04", "1998", "1997"];

    const response = helper.sortStrings(arrayOfString);

    expect(response).toEqual(["001", "01", "02", "04", "05", "1997", "1998"]);
  });

  test("dado um array de strings, deve ordenar em ordem alfabética", () => {
    const arrayOfString = [
      "the-last-dance",
      "victory-dance",
      "smile",
      "welcome-to-my-world",
      "close-to-you",
      "close-to-us",
    ];

    const response = helper.sortStrings(arrayOfString);

    expect(response).toEqual([
      "close-to-us",
      "close-to-you",
      "smile",
      "the-last-dance",
      "victory-dance",
      "welcome-to-my-world",
    ]);
  });
});

describe("separação de strings", () => {
  test("dado uma frase, deve separar cada palavra em um array", () => {
    const response = helper.splitString("walt disney");

    expect(response).toEqual(["walt", "disney"]);
  });
});

describe("pesquisa nos arquivos", () => {
  test("dado uma massa de dados formatados e uma sentença, deve procurá-la em toda a massa de dados e retornar o nome dos arquivos de forma ordenada", () => {
    const data = [
      {
        filename: "via-padova-46.txt",
        content: "via padova 46 1954",
      },
      {
        filename: "a-bullet-is-waiting.txt",
        content:
          "a bullet is waiting 1954 rory calhoun jean simmons stephen mcnally john farrow casey robinson thames williamson",
      },
      {
        filename: "vice-academy.txt",
        content:
          "vice academy 1989 linnea quigley ginger lynn allen karen russell rick sloane rick sloane rick sloane",
      },
      {
        filename: "victor.txt",
        content: "victor 1998  sandrine veysset",
      },
    ];

    const pattern = "1954";

    const response = helper.searchFilesWithTheGivenPattern(pattern, data);

    expect(response).toEqual(["a-bullet-is-waiting.txt", "via-padova-46.txt"]);
  });
});
