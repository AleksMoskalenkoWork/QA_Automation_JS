// Завдання 4.3

// Створіть змінну radius і присвойте їй числове значення радіуса циліндра.
// Створіть змінну height і присвойте їй числове значення висоти циліндра.
// Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть результат.

const radius = 14;
const height = 24;

const cylinderVolume = Math.PI * Math.pow(radius, 2) * height;

console.log(cylinderVolume.toFixed(2));
