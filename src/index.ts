export function sum(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Divisão por zero não é permitida");
  }
  return a / b;
}

export function isPalindrome(text: string): boolean {
  const clean = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  return clean === clean.split("").reverse().join("");
}

export function capitalize(text: string): string {
  if (text.length === 0) return text;
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export function average(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("A lista não pode estar vazia");
  }
  return numbers.reduce((acc, n) => acc + n, 0) / numbers.length;
}
