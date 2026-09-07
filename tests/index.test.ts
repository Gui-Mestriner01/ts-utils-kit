import { sum, subtract, multiply, divide, isPalindrome, capitalize, average } from "../src/index";

describe("operações aritméticas", () => {
  test("sum soma dois números", () => {
    expect(sum(2, 3)).toBe(5);
  });

  test("subtract subtrai dois números", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test("multiply multiplica dois números", () => {
    expect(multiply(4, 3)).toBe(12);
  });

  test("divide divide dois números", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("divide lança erro ao dividir por zero", () => {
    expect(() => divide(10, 0)).toThrow("Divisão por zero não é permitida");
  });
});

describe("utilitários de texto", () => {
  test("isPalindrome identifica um palíndromo simples", () => {
    expect(isPalindrome("arara")).toBe(true);
  });

  test("isPalindrome ignora espaços e maiúsculas", () => {
    expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
  });

  test("isPalindrome retorna false para não-palíndromo", () => {
    expect(isPalindrome("javascript")).toBe(false);
  });

  test("capitalize capitaliza a primeira letra", () => {
    expect(capitalize("guilherme")).toBe("Guilherme");
  });

  test("capitalize lida com string vazia", () => {
    expect(capitalize("")).toBe("");
  });
});

describe("average", () => {
  test("calcula a média de uma lista de números", () => {
    expect(average([2, 4, 6])).toBe(4);
  });

  test("lança erro para lista vazia", () => {
    expect(() => average([])).toThrow("A lista não pode estar vazia");
  });
});
