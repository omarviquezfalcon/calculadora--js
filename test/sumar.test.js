const sumar = require('../src/sumar'); // Cambiado a 'sumar'

test('suma 10 + 20 deberia ser 30', () => {
  expect(sumar(10, 20)).toBe(30);
});

test('suma 1 + 1 deberia ser 2', () => {
  expect(sumar(1, 1)).toBe(2);
});

test('suma 0 + 0 deberia ser 0', () => {
  expect(sumar(0, 0)).toBe(0);
});

test('suma 1000 + 350 deberia ser 1350', () => {
  expect(sumar(1000, 350)).toBe(1350);
});